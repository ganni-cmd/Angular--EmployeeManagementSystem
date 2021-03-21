
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee: Employee = new Employee();
  constructor(private employeeservice: EmployeeService, private router: Router) { }

  alert: boolean = false;
  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeservice.addEmployee(this.employee).subscribe(data => {
      console.log(data);

    }, error => console.log(error))
  }

  redirect() {
    this.router.navigate(["employees"]);
  }

  onSubmit() {
    this.saveEmployee();
    this.alert = true;

  }
  close() {
    this.alert = false;
    this.redirect();
  }
}