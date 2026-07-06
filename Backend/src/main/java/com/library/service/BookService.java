package com.library.service;

import java.util.List;

import com.library.dto.ApiResponse;
import com.library.dto.BookRequest;
import com.library.entity.Book;

public interface BookService {
	 ApiResponse addBook(BookRequest request);

	    ApiResponse updateBook(Long id, BookRequest request);

	    ApiResponse deleteBook(Long id);

	    Book getBookById(Long id);

	    List<Book> getAllBooks();

	    List<Book> searchBook(String keyword);

}
