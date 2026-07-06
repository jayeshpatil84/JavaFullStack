package com.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.entity.IssueBook;
import com.library.entity.User;

@Repository
public interface IssueBookRepository extends JpaRepository<IssueBook,Long> {
    List<IssueBook> findByUser(User user);

    List<IssueBook> findByStatus(String status);
}
