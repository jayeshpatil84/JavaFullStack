package com.library.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.library.dto.ApiResponse;
import com.library.dto.BookRequest;
import com.library.entity.Book;
import com.library.service.BookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:4200",
        allowCredentials = "true")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ApiResponse addBook(
            @Valid @RequestBody BookRequest request) {

        return bookService.addBook(request);
    }

    @PutMapping("/{id}")
    public ApiResponse updateBook(
            @PathVariable Long id,
            @Valid @RequestBody BookRequest request) {

        return bookService.updateBook(id, request);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteBook(@PathVariable Long id) {

        return bookService.deleteBook(id);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {

        return bookService.getBookById(id);
    }

    @GetMapping
    public List<Book> getAllBooks() {

        return bookService.getAllBooks();
    }

    @GetMapping("/search")
    public List<Book> searchBook(
            @RequestParam String keyword) {

        return bookService.searchBook(keyword);
    }

}
