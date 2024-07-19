import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { TaskListComponent } from "../../task-list/task-list.component";
import { PageTitleComponent } from "../../page-title/page-title.component";

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [TaskListComponent, PageTitleComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.css'
})
export class CompletedTaskComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);
  
  ngOnInit(){
    this.getAllTask();
  }
  
  getAllTask(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result.filter((x:any)=>x.completed==true);
    })
  }
  onComplete(task:any) {
    task.completed=true;
    console.log("complete",task);
    this.httpService.updateTask(task).subscribe(()=>{ 
    })
     
   }
  onImportant(task:any) {
    task.important=true;
    console.log("important",task);
    this.httpService.updateTask(task).subscribe(()=>{  
    })
    
  }

}
