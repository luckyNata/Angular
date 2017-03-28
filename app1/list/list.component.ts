import  {Component, OnInit} from '@angular/core';
import { Todo } from '../shared/dataType';
import {TodoService} from "../shared/todo.service";

@Component ({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class ListComponent implements OnInit{
    todos : Todo[];

    constructor(private todoService: TodoService){
        this.todos = [];
    }

    ngOnInit(){
        this.todos = this.todoService.getTodos();
    }
    deleteTodo(todo){
        this.todoService.deleteItem(todo);
    }
    toggleTodo(todo){
        this.todoService.toggleItem(todo);
    }
}