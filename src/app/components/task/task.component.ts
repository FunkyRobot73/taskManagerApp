import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Itask } from 'src/app/inerfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task!:Itask;
  @Output() deleteEvent = new EventEmitter();  //Custom Event
  constructor(private taskService:TasksService) {

  }

  onDelete(task_id:number){
    if(confirm(`Are you sure you want to delete ${this.task.title}?`))
    {
      this.taskService.deleteTask(task_id).subscribe((result) => {
        console.log(result);
      })
      this.deleteEvent.emit(this.task.id);  //Triggering our Custom Event
    }
  }

  

}
