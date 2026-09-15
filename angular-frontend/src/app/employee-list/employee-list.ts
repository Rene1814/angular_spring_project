import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Employee } from '../employee';

@Component({
  imports: [NgFor],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  employees: Employee[] = [];
  ngOnInit(): void {
    this.employees = [
      { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com' },
    ];
  }
}
