import { ChangeDetectorRef, Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  employees: Employee[] = [];
  errorMessage = '';

  constructor(
    private employeeService: EmployeeService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe({
      next: data => {
        console.log('Employees loaded', data);
        this.employees = data;
        this.changeDetectorRef.markForCheck();
      },
      error: error => {
        console.error('Failed to load employees', error);
        this.errorMessage = 'Não foi possível carregar os funcionários.';
      }
    });
  }

  employeeDetails(id?: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id?: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id?: number){
    this.employeeService.deleteEmployee(id).subscribe(data=> {
      console.log(data); 
      this.getEmployees();
    })
  }
}
