import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/BookService';
import { IssueService } from '../../services/IssueService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-book',
  standalone: false,
  templateUrl: './issue-book.html',
  styleUrl: './issue-book.css',
})
export class IssueBook implements OnInit {

  books:any[]=[];

  users:any[]=[];
issueForm!:FormGroup;
  constructor(

    private fb:FormBuilder,

    private bookService:BookService,

    private issueService:IssueService,

    private snackBar:MatSnackBar,

    private router:Router

  ){ this.issueForm=this.fb.group({

    userId:['',Validators.required],

    bookId:['',Validators.required]

  });}

 

  ngOnInit(): void {

    this.loadBooks();

    // User list API will be added later

  }

  loadBooks(){

    this.bookService.getAllBooks().subscribe({

      next:(data)=>{

        this.books=data;

      }

    });

  }

  issueBook(){

    if(this.issueForm.invalid){

      return;

    }

    this.issueService.issueBook(this.issueForm.value).subscribe({

      next:(response:any)=>{

        this.snackBar.open(response.message,'Close',{

          duration:3000

        });

        this.router.navigate(['/history']);

      },

      error:(error)=>{

        this.snackBar.open(error.error.message,'Close');

      }

    });

  }}
