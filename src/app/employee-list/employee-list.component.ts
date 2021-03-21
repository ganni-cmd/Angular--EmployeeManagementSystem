import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(private employeeservice: EmployeeService, private router: Router) { }

  employees: Employee[];
  alert: boolean = false;


  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeservice.getEmployeesList().subscribe(data => {
      this.employees = data;

    })
  }

  employeeDetails(id: number) {
    this.router.navigate(["employeedetails", id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(["updateemployee", id]);
    this.getEmployees();
  }


  deleteEmployee(id: number) {
    this.employeeservice.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
      this.alert = true;
    })
  }



  close() {
    this.alert = false;
  }

}



