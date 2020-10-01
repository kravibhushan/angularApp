import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';



@NgModule({
  declarations: [ViewEmployeeComponent, CreateEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
