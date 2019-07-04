import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  tableData = [];
  columnHeader = [];
  totalRec: number;
  constructor() { }

  ngOnInit() {
    this.columnHeader = [
      {
        name: 'Name',
        header: 'Name'
      },
      {
        name: 'Description',
        header: 'Description'
      },
      {
        name: 'Create',
        header: 'Create'
      },
      {
        name: 'creation',
        header: 'Creation Date'
      },
      {
        name: 'updated',
        header: 'Updated Date'
      }
    ];
    this.tableData = [{
      Name: 'Kitchen Utensils', Description: 'Checklist for utensil cleansing',
      Create: 'Robin', creation: '21-May-2019 09:43:33 IST', updated: '21-May-2019 09:43:33 IST'
    },
    {
      Name: 'Kitchen Utensils', Description: 'Checklist for utensil cleansing',
      Create: 'Tina', creation: '21-May-2019 09:43:33 IST', updated: '21-May-2019 09:43:33 IST'
    },
    {
      Name: 'Kitchen Utensils', Description: 'Checklist for utensil cleansing',
      Create: 'Spandana', creation: '21-May-2019 09:43:33 IST', updated: '21-May-2019 09:43:33 IST'
    },
    {
      Name: 'Kitchen Utensils', Description: 'Checklist for utensil cleansing',
      Create: 'Vrushali', creation: '21-May-2019 09:43:33 IST', updated: '21-May-2019 09:43:33 IST'
    }];

  }

}
