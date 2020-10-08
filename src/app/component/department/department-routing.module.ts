import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';

const routes: Routes = [
  { path: '', component: ViewDepartmentComponent },
  { path: 'create', component: CreateDepartmentComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}

