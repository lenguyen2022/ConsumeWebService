import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentModel} from "../models/student.model";

const baseUrl = 'http://localhost:8080/api/students';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(baseUrl);
  }
  getStudentById(id:number): Observable<StudentModel> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  createStudent(data: StudentModel): Observable<StudentModel> {
    return this.http.post(baseUrl, data);
  }
  updateStudent(data: StudentModel, id:number): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  deleteStudent(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
