import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url = "http://localhost:8080/api/v1/employees";
  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  addEmployee(employee: Employee): Observable<Object> {
    return this.http.post(this.url, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/ ${id}`);

  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.url}/ ${id}`, employee);
  }

  deleteEmployee(id: number): Observable<object> {
    return this.http.delete(this.url + "/" + id);
  }
}
