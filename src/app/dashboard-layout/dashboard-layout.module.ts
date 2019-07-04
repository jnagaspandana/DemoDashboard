import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckListModule } from './check-list/check-list.module';
import { SidebarCmpModule } from './sidebar-cmp/sidebar-cmp.module';
import { CheckListComponent } from './check-list/check-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: []
  },
  
];

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    CheckListModule,
    SidebarCmpModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardLayoutComponent, RouterModule]
})
export class DashboardLayoutModule { }
