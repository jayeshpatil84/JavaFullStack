import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = "http://localhost:9091/api/books";

  constructor(private http: HttpClient) { }

  // Get All Books
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  // Get Book By Id
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  // Add Book
  addBook(book: Book): Observable<any> {
    return this.http.post(this.baseUrl, book);
  }

  // Update Book
  updateBook(id: number, book: Book): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, book);
  }

  // Delete Book
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Search Book
  searchBook(keyword: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/search?keyword=${keyword}`);
  }

}
