package com.library.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BookRequest {

    @NotBlank(message = "Book name is required")
    private String bookName;

    @NotBlank(message = "Author name is required")
    private String author;

    @NotBlank(message = "Category is required")
    private String category;

    @Min(value = 1, message = "Price must be greater than 0")
    private Double price;

    @Min(value = 0, message = "Quantity cannot be negative")
    private Integer quantity;

}
