import  {Component, EventEmitter, Output} from '@angular/core';
import {TodoService} from "../shared/todo.service";

@Component ({
    moduleId: module.id,
    selector: 'form-todo',
    templateUrl: 'form-todo.component.html',
    styleUrls: ['form-todo.component.css']
})

export class FormTodoComponent {
    title : string = '';

    constructor(private todoService: TodoService){}

    onSubmit(){

        this.todoService.createItem(this.title);
    }


}