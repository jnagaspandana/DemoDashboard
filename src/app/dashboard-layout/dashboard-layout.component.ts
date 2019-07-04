import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  isChecked = false;
  constructor() { }

  ngOnInit() {
  }

  getCheckList(event: any){
  this.isChecked = event;
  }
}
