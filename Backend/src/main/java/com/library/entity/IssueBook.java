package com.library.entity;



import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;



@Entity
@Table(name = "issue_books")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IssueBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long issueId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    private LocalDate issueDate;

    private LocalDate dueDate;

    private LocalDate returnDate;

    @Column(nullable = false)
    private String status; // ISSUED, RETURNED

}
