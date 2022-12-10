import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ApiComponent } from './api/api.component';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'product',component:ProductComponent},
  {path:'crud',component:CrudComponent},
  {path:'api',component:ApiComponent},
  {path:'api/add',component:AddStudentComponent},
  {path:'api/edit/:id',component:AddStudentComponent},
  {path:'api/:id',component:StudentDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
