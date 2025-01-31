import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) currentUserId!:string;
  @Input() name?:string
  private tasksService = inject(TasksService)
  isAddingTask=false;

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.currentUserId)
  }
  
  onCompleteTask(id:string){
    this.tasksService.removeTask(id)
  }

  onDialogClose(){
    this.isAddingTask=false;
  }
  onStartAddingTask(){
    this.isAddingTask=true;
  }
}
