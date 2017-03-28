import {Todo} from './dataType';
import {todos} from './data';

export class TodoService {
    todos:Todo[] = todos;

    getTodos() : Todo[] {
        // console.log('from service');
        return this.todos;
    }
    toggleItem(todo: Todo){
        todo.status = !todo.status;
    }
    deleteItem(todo: Todo){
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
    }
    createItem(title: string){
        this.todos = todos;
        let newTodo: Todo = new Todo(title);
        this.todos.push(newTodo);
    }

}
