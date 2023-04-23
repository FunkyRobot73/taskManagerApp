import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../inerfaces/itask';
//import { Itask } from '../interfaces/itask';



@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = "http://localhost:3001/tasks";

  constructor(private http:HttpClient) { }
  
  getTasks() {
    return this.http.get<Itask[]>(this.url)
  }

  

  deleteTask(task_id:number) {
    return this.http.delete<Itask>(this.url + "/" + task_id);
  }

  createTask(data:any) {
    return this.http.post<Itask>(this.url, data);
  }
}
