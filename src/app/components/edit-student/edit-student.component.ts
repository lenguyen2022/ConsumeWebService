import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {StudentModel} from "../../models/student.model";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{
  student?:StudentModel;
  allowEdit?:string;
  constructor(private studentService:StudentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.getStudent(this.route.snapshot.params['id']);
   console.log("Student id = " + this.student?.id);
   console.log("Student name = " + this.student?.name);

   this.getEditQuery();
  }
  getStudent(id:any){
    this.studentService.getStudentById(id)
      .subscribe({
        next:(data)=>{
          this.student = data;
          console.log(data);
        },
        error:(e)=>console.error(e)});
  }
  getEditQuery(){
    this.route.queryParams.subscribe(params=>{
      this.allowEdit = params['allowEdit'];
      console.log("AllowEdit = " + this.allowEdit);
    });
  }
  updateStudent(){
    if(this.allowEdit === '1' && this.student?.id ) {
      this.studentService.updateStudent(this.student, this.student?.id).subscribe(
        (data)=>{
          console.log(data);
      }
      );
      console.log("Update Student " + this.student?.name + " id = " + this.student?.id);
    }
  }
}
