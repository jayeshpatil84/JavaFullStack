import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { App } from './app';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { Navbar } from './components/navbar/navbar';
import { Sidenav } from './components/sidenav/sidenav';

import { AddBook } from './books/add-book/add-book';
import { UpdateBook } from './books/update-book/update-book';
import { ListBook } from './books/list-book/list-book';

import { IssueBook } from './issue/issue-book/issue-book';
import { ReturnBook } from './issue/return-book/return-book';
import { HistoryComponent } from './issue/history/HistoryComponent';

import { MaterialModule } from './shared/material/material-module';
import { AppRoutingModule } from './app-routing-module';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Dashboard,
    Navbar,
    Sidenav,
    AddBook,
    UpdateBook,
    ListBook,
    IssueBook,
    ReturnBook,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    MatPaginatorModule,
    MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
  ],
  bootstrap: [App]
})
export class AppModule { }