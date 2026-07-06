package com.library.service.Impl;



import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.library.dto.ApiResponse;
import com.library.dto.IssueBookRequest;
import com.library.entity.Book;
import com.library.entity.IssueBook;
import com.library.entity.User;
import com.library.exception.BookNotFoundException;
import com.library.exception.BookOutOfStockException;
import com.library.exception.UserNotFoundException;
import com.library.repository.BookRepository;
import com.library.repository.IssueBookRepository;
import com.library.repository.UserRepository;
import com.library.service.IssueBookService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IssueBookServiceImpl implements IssueBookService {

    private final BookRepository bookRepository;
    private final UserRepository userRepository;
    private final IssueBookRepository issueBookRepository;

    @Override
    public ApiResponse issueBook(IssueBookRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() ->
                        new UserNotFoundException("User not found"));

        Book book = bookRepository.findById(request.getBookId())
                .orElseThrow(() ->
                        new BookNotFoundException("Book not found"));

        if (book.getQuantity() <= 0) {
            throw new BookOutOfStockException("Book is out of stock");
        }

        book.setQuantity(book.getQuantity() - 1);

        if (book.getQuantity() == 0) {
            book.setStatus("OUT OF STOCK");
        }

        bookRepository.save(book);

        IssueBook issue = IssueBook.builder()
                .user(user)
                .book(book)
                .issueDate(LocalDate.now())
                .dueDate(LocalDate.now().plusDays(15))
                .status("ISSUED")
                .build();

        issueBookRepository.save(issue);

        return new ApiResponse(true,
                "Book Issued Successfully",
                issue);
    }

    @Override
    public ApiResponse returnBook(Long issueId) {

        IssueBook issue = issueBookRepository.findById(issueId)
                .orElseThrow(() ->
                        new RuntimeException("Issue record not found"));

        if ("RETURNED".equals(issue.getStatus())) {
            return new ApiResponse(false,
                    "Book already returned",
                    null);
        }

        Book book = issue.getBook();

        book.setQuantity(book.getQuantity() + 1);
        book.setStatus("AVAILABLE");

        bookRepository.save(book);

        issue.setReturnDate(LocalDate.now());
        issue.setStatus("RETURNED");

        issueBookRepository.save(issue);

        return new ApiResponse(true,
                "Book Returned Successfully",
                issue);
    }

    @Override
    public List<IssueBook> getAllIssuedBooks() {

        return issueBookRepository.findAll();
    }

    @Override
    public List<IssueBook> getIssuedBooksByUser(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found"));

        return issueBookRepository.findByUser(user);
    }

}
