import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarCmpComponent } from './sidebar-cmp.component';
import { TreeModule } from 'angular-tree-component';
import { CheckListComponent } from '../check-list/check-list.component';
import { CheckListModule } from '../check-list/check-list.module';
@NgModule({
  declarations: [SidebarCmpComponent],
  imports: [
    CommonModule,
    CheckListModule,
    TreeModule.forRoot()
  
  ],
  exports: [SidebarCmpComponent]
})
export class SidebarCmpModule { }
