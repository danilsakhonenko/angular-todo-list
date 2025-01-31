import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string
  @Output() dialogClose = new EventEmitter()
  @Output() submit = new EventEmitter<NewTaskData>()
  private tasksService = inject(TasksService)
  enteredTitle = '';
  enteredSummary= '';
  enteredDate= '';

  onDialogClose(){
    this.dialogClose.emit()
  }

  onSubmit(){
    this.tasksService.addNewTask({
      title:this.enteredTitle, 
      summary:this.enteredSummary, 
      date:this.enteredDate
    }, this.userId)
    this.dialogClose.emit()
  }
}
