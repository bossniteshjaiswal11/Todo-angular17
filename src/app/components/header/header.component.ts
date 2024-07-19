import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __values } from 'tslib';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent {
  stateService=inject(StateService);
  searchControl=new FormControl("");
  ngOnInit(){
    this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{ 
      this.stateService.searchsubject.next(value || "");
    })
  }


}
