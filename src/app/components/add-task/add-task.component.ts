import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  taskForm;

  constructor(private formBuilder:FormBuilder, private taskService:TasksService){
    this.taskForm = formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      task_date: ['', [Validators.required]],
      category: ['', [Validators.required]],
      priority_level: ['', [Validators.required]],
      progress_level: ['', [Validators.required]],
    });
  }

  get titleFormControl() {
    return this.taskForm.get('title')!;
  }

  get descriptionFormControl() {
    return this.taskForm.get('description')!;
  }

  get taskDateFormControl() {
    return this.taskForm.get('task_date')!;
  }

  get categoryFormControl() {
    return this.taskForm.get('category')!;
  }

  get priorityLevelFormControl() {
    return this.taskForm.get('priority_level')!;
  }
  get progressLevelFormControl() {
    return this.taskForm.get('progress_level')!;
  }

  onSubmit() {
    let task_data = (this.taskForm.value);
    

    this.taskService.createTask(task_data).subscribe((result) => {
      console.log(result)
      this.taskForm.reset();
      alert('Student was created successfully!');
    })
  }
}
