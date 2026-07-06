package com.library.service;

import java.util.List;

import com.library.dto.ApiResponse;
import com.library.dto.IssueBookRequest;
import com.library.entity.IssueBook;

public interface IssueBookService {
	  ApiResponse issueBook(IssueBookRequest request);

	    ApiResponse returnBook(Long issueId);

	    List<IssueBook> getAllIssuedBooks();

	    List<IssueBook> getIssuedBooksByUser(Long userId);
}
