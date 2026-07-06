package com.library.controller;


import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.library.dto.ApiResponse;
import com.library.dto.IssueBookRequest;
import com.library.entity.IssueBook;
import com.library.service.IssueBookService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200",
        allowCredentials = "true")
public class IssueBookController {

    private final IssueBookService issueBookService;

    @PostMapping
    public ApiResponse issueBook(
            @Valid @RequestBody IssueBookRequest request) {

        return issueBookService.issueBook(request);
    }

    @PutMapping("/{issueId}")
    public ApiResponse returnBook(
            @PathVariable Long issueId) {

        return issueBookService.returnBook(issueId);
    }

    @GetMapping
    public List<IssueBook> getAllIssuedBooks() {

        return issueBookService.getAllIssuedBooks();
    }

    @GetMapping("/user/{userId}")
    public List<IssueBook> getUserHistory(
            @PathVariable Long userId) {

        return issueBookService.getIssuedBooksByUser(userId);
    }

}
