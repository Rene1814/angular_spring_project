import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-create-employee',
  styleUrl: './create-employee.css',
  templateUrl: './create-employee.html',
})
export class CreateEmployee {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: createdEmployee => {
        console.log('Employee created', createdEmployee);
        this.router.navigate(['/employees']);
      },
      error: error => {
        console.error('Failed to create employee', error);
      }
    });
  }
}
