import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {FormTodoComponent} from "./form/form-todo.component";
import {ListComponent} from "./list/list.component";
import {ItemComponent} from "./item/item.component";
import {TodoService} from "./shared/todo.service";

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, FormTodoComponent, ItemComponent, ListComponent],
    providers: [TodoService],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }