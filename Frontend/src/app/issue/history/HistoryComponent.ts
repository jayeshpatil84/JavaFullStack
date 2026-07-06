import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IssueService } from '../../services/IssueService';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = [
    'issueId',
    'student',
    'book',
    'issueDate',
    'returnDate',
    'status'
  ];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {

    this.loadHistory();

  }

  loadHistory() {

    this.issueService.getIssueHistory().subscribe({

      next: (data: any) => {

        this.dataSource.data = data;

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;

      }

    });

  }

  applyFilter(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.dataSource.filter = value.trim().toLowerCase();

  }}
