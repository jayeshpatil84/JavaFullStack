import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { ListBook } from './books/list-book/list-book';
import { AddBook } from './books/add-book/add-book';
import { UpdateBook } from './books/update-book/update-book';
import { IssueBook } from './issue/issue-book/issue-book';
import { ReturnBook } from './issue/return-book/return-book';
import { HistoryComponent } from './issue/history/HistoryComponent';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  { path: 'register', component: Register },

  { path: 'dashboard', component: Dashboard },

  { path: 'books', component: ListBook },

  { path: 'books/add', component: AddBook },

  { path: 'books/edit/:id', component: UpdateBook },

 { path: 'issue', component: IssueBook },

  { path: 'return', component: ReturnBook },

  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
