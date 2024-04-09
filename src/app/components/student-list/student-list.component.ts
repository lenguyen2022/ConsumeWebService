import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {StudentModel} from "../../models/student.model";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  studentList?:StudentModel[];
  constructor(private studentService:StudentService ) {
  }
  ngOnInit(): void {
    this.getStudentList();
  }
  getStudentList(){
    this.studentService.getAllStudents()
      .subscribe({
        next:(data)=>{
      this.studentList = data;
      console.log(data);
    },
      error:(e)=>console.error(e)
    });
  }



}
