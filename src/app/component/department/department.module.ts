import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';



@NgModule({
  declarations: [ViewDepartmentComponent, CreateDepartmentComponent],
  imports: [
    CommonModule
  ]
})
export class DepartmentModule { }
