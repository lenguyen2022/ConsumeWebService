import { Routes } from '@angular/router';
import {StudentListComponent} from "./components/student-list/student-list.component";
import {StudentDetailsComponent} from "./components/student-details/student-details.component";
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";

export const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'editstudent/:id/edit', component: EditStudentComponent }
];
