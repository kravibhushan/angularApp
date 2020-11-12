import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BadRequestComponent } from './bad-request/bad-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'Employee',
    loadChildren: () => import('./component/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'Department',
    loadChildren: () => import('./component/department/department.module').then(m => m.DepartmentModule)
  },
  { path: '**', component: BadRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
