import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  totalBooks: number = 120;
  issuedBooks: number = 20;
  totalUsers: number = 15;
  returnedBooks: number = 8;

  constructor() { }
}
