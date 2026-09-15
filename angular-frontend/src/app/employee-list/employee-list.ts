import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  employees: Employee[] = [];
}
