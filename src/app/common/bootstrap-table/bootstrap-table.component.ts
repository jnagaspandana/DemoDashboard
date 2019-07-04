import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//import { PageChangedEvent } from 'ngx-bootstrap';
import { Column } from './table.model';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() tableData: any[];
   data = [];
  totalRec: number;
  constructor() { }

  ngOnInit() {
    this.data = this.tableData;
     this.totalRec = this.data.length;
  }
}
