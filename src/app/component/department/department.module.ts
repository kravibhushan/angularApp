import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { NavDepartmentComponent } from './nav-department/nav-department.component';



@NgModule({
  declarations: [ViewDepartmentComponent, CreateDepartmentComponent, NavDepartmentComponent],
  imports: [
    CommonModule, DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
