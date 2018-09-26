import { Component, OnInit, Input } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() newTask:string;
  
  constructor(private dataservice : DataService) { 
  }

  tasks = this.dataservice.tasks;

  insert() {
    var newId = this.dataservice.tasks.length;
    this.dataservice.tasks.push({
      id: +newId,
      nom: this.newTask,
      description: "",
      status: 1
    });
    this.tasks = this.dataservice.tasks;
  }

  ngOnInit() {
  }

}
