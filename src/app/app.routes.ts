import { Routes } from '@angular/router';
import {StudentListComponent} from "./components/student-list/student-list.component";
import {StudentDetailsComponent} from "./components/student-details/student-details.component";
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";
import {DeleteStudentComponent} from "./components/delete-student/delete-student.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'editstudent/:id/edit', component: EditStudentComponent },
  { path: 'delete-student/:id', component: DeleteStudentComponent },
  { path: 'delete-student/:id/delete', component: DeleteStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
