import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTableComponent } from './bootstrap-table.component';
//import { PaginationModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BootstrapTableComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
    //PaginationModule.forRoot()
  ],
  exports: [BootstrapTableComponent]
})
export class BootstrapTableModule { }
