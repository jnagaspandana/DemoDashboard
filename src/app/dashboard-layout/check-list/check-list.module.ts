import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListComponent } from './check-list.component';
import { BootstrapTableModule } from 'src/app/common/bootstrap-table/bootstrap-table.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'checklist',
    component: CheckListComponent
  }]
@NgModule({
  declarations: [CheckListComponent],
  imports: [
    CommonModule,
    BootstrapTableModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports: [CheckListComponent,RouterModule]
})
export class CheckListModule { }
