import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../../models/book';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BookService } from '../../services/BookService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  standalone: false,
  templateUrl: './list-book.html',
  styleUrl: './list-book.css',
})
export class ListBook implements OnInit {

  displayedColumns: string[] = [
    'bookId',
    'bookName',
    'author',
    'category',
    'price',
    'quantity',
    'status',
    'action'
  ];

  dataSource = new MatTableDataSource<Book>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadBooks();

  }

  loadBooks() {

    this.bookService.getAllBooks().subscribe({

      next: (data) => {

        this.dataSource.data = data;

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;

      }

    });

  }

  applyFilter(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.dataSource.filter = value.trim().toLowerCase();

  }

  editBook(id: number) {

    this.router.navigate(['/books/edit', id]);

  }

  deleteBook(id: number) {

    if (confirm("Are you sure?")) {

      this.bookService.deleteBook(id).subscribe({

        next: () => {

          this.loadBooks();

        }

      });

    }

  }
}
