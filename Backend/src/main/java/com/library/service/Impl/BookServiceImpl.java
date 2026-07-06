package com.library.service.Impl;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.dto.ApiResponse;
import com.library.dto.BookRequest;
import com.library.entity.Book;
import com.library.exception.BookAlreadyExistsException;
import com.library.exception.BookNotFoundException;
import com.library.repository.BookRepository;
import com.library.service.BookService;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public ApiResponse addBook(BookRequest request) {

        if (bookRepository.existsByBookName(request.getBookName())) {
            throw new BookAlreadyExistsException("Book already exists.");
        }

        Book book = Book.builder()
                .bookName(request.getBookName())
                .author(request.getAuthor())
                .category(request.getCategory())
                .price(request.getPrice())
                .quantity(request.getQuantity())
                .status("AVAILABLE")
                .build();

        bookRepository.save(book);

        return new ApiResponse(true, "Book Added Successfully", book);
    }

    @Override
    public ApiResponse updateBook(Long id, BookRequest request) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() ->
                        new BookNotFoundException("Book not found."));

        book.setBookName(request.getBookName());
        book.setAuthor(request.getAuthor());
        book.setCategory(request.getCategory());
        book.setPrice(request.getPrice());
        book.setQuantity(request.getQuantity());

        if (request.getQuantity() > 0) {
            book.setStatus("AVAILABLE");
        } else {
            book.setStatus("OUT OF STOCK");
        }

        bookRepository.save(book);

        return new ApiResponse(true, "Book Updated Successfully", book);
    }

    @Override
    public ApiResponse deleteBook(Long id) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() ->
                        new BookNotFoundException("Book not found."));

        bookRepository.delete(book);

        return new ApiResponse(true, "Book Deleted Successfully", null);
    }

    @Override
    public Book getBookById(Long id) {

        return bookRepository.findById(id)
                .orElseThrow(() ->
                        new BookNotFoundException("Book not found."));
    }

    @Override
    public List<Book> getAllBooks() {

        return bookRepository.findAll();
    }

    @Override
    public List<Book> searchBook(String keyword) {

        List<Book> books =
                bookRepository.findByBookNameContainingIgnoreCase(keyword);

        if (books.isEmpty()) {
            throw new BookNotFoundException("No books found.");
        }

        return books;
    }

}
