import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITreeOptions, TREE_ACTIONS, KEYS } from 'angular-tree-component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: './sidebar-cmp.component.html',
  styleUrls: ['./sidebar-cmp.component.css']
})

export class SidebarCmpComponent implements OnInit {
  @Output() isChecked = new EventEmitter<boolean>();
  
  nodes = [
    {
      id: 1,
      name: 'Audit Management System',
      children: [
        { id: 2, name: 'Checklist' },
        { id: 3, name: 'Reports' }
      ]
    },
    {
      id: 4,
      name: 'Vendor Management',
      children: [
        { id: 5, name: 'Manage Vendor' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
 
  //options  = {};
  constructor(private route : Router, private router : ActivatedRoute) { }

  ngOnInit() {

  }

  onEvent(node){
   var data = node.node.data.name;
   if(data == 'Checklist'){
   this.isChecked.emit(true);
    this.route.navigate(["/dashboard/checklist"], {relativeTo :this.router});
  }
   }

  // loadNodeChildren(node) {
  //   var data=node.slectedItemCall;
  // }


  // getChecklist(){
  //   alert('HII');
  // }
}
