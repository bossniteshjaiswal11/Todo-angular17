import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  searchsubject:BehaviorSubject<string>= new BehaviorSubject<string>("");
  constructor() { }
}
