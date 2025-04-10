import {Component, OnInit} from '@angular/core';
import {StudentModel} from "../../models/student.model";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent implements OnInit {
  student: StudentModel = new StudentModel();
  private allowDelete: number = 0;
  constructor(private studentService:StudentService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.getStudent(this.route.snapshot.params['id']);
    this.getDeleteQuery();

  }
  getStudent(id:number) {
    this.studentService.getStudentById(id)
      .subscribe({
        next:(data)=>{
          this.student = data;
          console.log(data);
        },
        error:(e)=>console.error(e)});
  }
  getDeleteQuery(){
    this.route.queryParams.subscribe(params=>{
      this.allowDelete = params['allowDelete'];
      console.log("AllowDelete = " + this.allowDelete);
    });
  }
  deleteStudent(){
    console.log(this.student);
    console.log(this.allowDelete);

    if(this.allowDelete == 1){
      console.log('delete this student'  + this.student);
      this.studentService.deleteStudent(<number> this.student.id).subscribe(()=> console.log("Successfully deleted student"));
      this.router.navigate(['/students']);
    }
    else{
      console.log('Something went wrong while deleting the student');
    }

  }

}
