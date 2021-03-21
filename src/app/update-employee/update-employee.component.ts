import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  alert: boolean = false;
  id: number;
  employee: Employee = new Employee();
  constructor(private employeeservice: EmployeeService, private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }


  onSubmit() {
    this.employeeservice.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.alert = true;
    }, error => console.log(error));
  }
  redirectto() {
    this.router.navigate(["/employees"]);
  }

  close() {
    this.alert = false;
    this.redirectto();

  }
}