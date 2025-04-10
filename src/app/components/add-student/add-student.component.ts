import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {StudentModel} from "../../models/student.model";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: StudentModel = new StudentModel();
  addMessage: string = '';
  constructor(private studentService: StudentService) {
    this.student.name = '';
    this.student.id = 0;
  }
  addStudent() {
    //use StudentService!
    console.log('AddStudentComponent');
    if(this.student.name === ''){
      this.addMessage = 'Please enter a name';
      console.log(this.student.name + "  " + this.student.id);
    }
    else {
      this.studentService.createStudent(this.student).subscribe(data => {
        console.log(data);
      });
      console.log(this.student.name + "  " + this.student.id);
    }

  }


}
