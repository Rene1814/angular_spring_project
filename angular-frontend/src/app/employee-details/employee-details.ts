import { ChangeDetectorRef, Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-service';

@Component({
  imports: [],
  selector: 'app-employee-details',
  styleUrl: './employee-details.css',
  templateUrl: './employee-details.html',
})
export class EmployeeDetails {

  id?: number;
  employee?: Employee;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (Number.isNaN(id)) {
      this.errorMessage = 'Funcionário inválido.';
      return;
    }

    this.id = id;
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log('Employee loaded', data);
      this.employee = data;
      this.changeDetectorRef.markForCheck();
    }, error => {
      console.error('Failed to load employee details', error);
      this.errorMessage = 'Não foi possível carregar os dados do funcionário.';
      this.changeDetectorRef.markForCheck();
    });
  }
}
