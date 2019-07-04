import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';

const routes: Routes = [
  
{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
