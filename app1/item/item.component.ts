import  {Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../shared/dataType';


@Component ({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent {
    @Input() todo: Todo;
    @Output() delete =  new EventEmitter();
    @Output() toggle = new EventEmitter();

    onDelete(){
        this.delete.emit(this.todo);
    }
    onToggle (){
        this.toggle.emit(this.todo);
    }
}