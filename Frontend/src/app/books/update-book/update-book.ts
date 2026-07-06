import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/BookService';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-book',
  standalone: false,
  templateUrl: './update-book.html',
  styleUrl: './update-book.css',
})
export class UpdateBook implements OnInit {

  bookId!: number;
bookForm!:FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {  this.bookForm = this.fb.group({

    bookName: ['', Validators.required],

    author: ['', Validators.required],

    category: ['', Validators.required],

    price: ['', Validators.required],

    quantity: ['', Validators.required]

  });}

 

  ngOnInit(): void {

    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadBook();

  }

  loadBook() {

    this.bookService.getBookById(this.bookId).subscribe({

      next: (book) => {

        this.bookForm.patchValue(book);

      }

    });

  }

  updateBook() {

    if (this.bookForm.invalid) {

      return;

    }

    this.bookService.updateBook(this.bookId, this.bookForm.value as any)
      .subscribe({

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
}
