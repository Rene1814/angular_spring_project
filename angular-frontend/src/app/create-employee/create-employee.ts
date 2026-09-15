import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-create-employee',
  styleUrl: './create-employee.css',
  templateUrl: './create-employee.html',
})
export class CreateEmployee {
  employee: Employee = new Employee();

  onSubmit(){
    console.log(this.employee);
  }
}
