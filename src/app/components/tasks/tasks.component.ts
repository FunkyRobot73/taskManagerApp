import { Component, OnInit } from '@angular/core';
import { Itask } from 'src/app/inerfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks!: Itask[];

  constructor(private taskService:TasksService){
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    });

  }

  ngOnInit(): void {
    console.log("Component Initialized")
  }
    
  deleteTask(task_id:number) {
   
    let index = this.tasks.findIndex((item) => {
      return item.id === task_id;
    });

    this.tasks.splice(index, 1);

    alert("Task was deleted!");

  }
}
