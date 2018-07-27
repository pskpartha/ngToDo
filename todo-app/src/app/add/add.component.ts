import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/todo';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  priorities = [1, 2, 3];
  // todoModel = new ToDo("","",1);
  model: ToDo = new ToDo();
  todoArray = [];

  constructor() { }

  ngOnInit() { }
  private addToDo() {
    this.todoArray.push(this.model);
    this.updateToDo();
  }
  updateToDo() {
    localStorage.setItem('todos', JSON.stringify(this.todoArray));
  }
  onSubmit() {
    this.model = {};
  }

}
