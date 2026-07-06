import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/IssueService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-book',
  standalone: false,
  templateUrl: './return-book.html',
styleUrls: ['./return-book.css']
})
export class ReturnBook implements OnInit {
displayedColumns: string[] = [
    'student',
    'book',
    'issueDate',
    'returnDate',
    'status',
    'action'
  ];
  issuedBooks: any[] = [];

  constructor(
    private issueService: IssueService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadIssuedBooks();

  }

  loadIssuedBooks() {

    this.issueService.getIssueHistory().subscribe({

      next: (data: any) => {

        this.issuedBooks = data;

      }

    });

  }

  returnBook(issueId: number) {

    if (confirm("Return this book?")) {

      this.issueService.returnBook(issueId).subscribe({

        next: (response: any) => {

          this.snackBar.open(response.message, "Close", {

            duration: 3000

          });

          this.loadIssuedBooks();

        }

      });

    }

  }
}
