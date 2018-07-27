import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos;
  constructor() { }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('todos'));
    this.todos = data;
    console.log(data)
    console.log(this.todos);
    ;
    
  }

}
