import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { DataService }       from '../data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  idTask:number;
  task;
  
  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

              view(id){
                var task
                for(let element of this.dataService.tasks){
                  if(element.id === id){
                    task = element
                  }
                }
                return task
              }
  ngOnInit() {
    this.idTask = this.route.snapshot.params['idTask'];
    this.task = this.view(+this.idTask);
    console.log(this.idTask);
    console.log(this.task);
  }
}
