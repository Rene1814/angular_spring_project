import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-update-employee',
  styleUrl: './update-employee.css',
  templateUrl: './update-employee.html',
})
export class UpdateEmployee {

  id?:number;
  employee: Employee = new Employee();
  constructor (private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data=> {this.employee = data},
      error=> console.log(error));    
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => {this.goToEmployeeList()},
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
