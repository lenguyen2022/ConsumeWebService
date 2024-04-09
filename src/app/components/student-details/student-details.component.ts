import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {StudentModel} from "../../models/student.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  student?:StudentModel;
 constructor(private studentService:StudentService, private route:ActivatedRoute) {
 }

  ngOnInit(): void {
   this.getStudentById(this.route.snapshot.params['id']);
  }
  getStudentById(id:number){
   this.studentService.getStudentById(id)
     .subscribe({
       next:(data)=>{
         this.student = data;
         console.log(data);
       },
       error:(e)=>console.error(e)});
  }
}
