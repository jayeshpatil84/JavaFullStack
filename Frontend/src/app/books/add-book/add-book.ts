import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/BookService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  bookForm!:FormGroup;
   constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {this.bookForm = this.fb.group({

    bookName: ['', Validators.required],

    author: ['', Validators.required],

    category: ['', Validators.required],

    price: ['', [Validators.required, Validators.min(1)]],

    quantity: ['', [Validators.required, Validators.min(1)]]

  }); }

  

  addBook() {

    if (this.bookForm.invalid) {

      return;

    }

    this.bookService.addBook(this.bookForm.value).subscribe({

      next: (response: any) => {

        this.snackBar.open(

          response.message,

          'Close',

          {

            duration: 3000

          }

        );

        this.router.navigate(['/books']);

      },

      error: (error) => {

        this.snackBar.open(

          error.error.message,

          'Close',

          {

            duration: 3000

          }

        );

      }

    });
}
  resetForm() {

    this.bookForm.reset();

  }
}