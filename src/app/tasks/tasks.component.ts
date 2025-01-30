import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

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
  isAddingTask=false;
  tasks=DUMMY_TASKS
  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId===this.currentUserId)
  }
  
  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task)=> task.id !== id)
  }

  onCancelTask(){
    this.isAddingTask=false;
  }
  onAddTask(){
    this.isAddingTask=true;
  }
}
