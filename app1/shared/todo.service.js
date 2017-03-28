"use strict";
var dataType_1 = require('./dataType');
var data_1 = require('./data');
var TodoService = (function () {
    function TodoService() {
        this.todos = data_1.todos;
    }
    TodoService.prototype.getTodos = function () {
        // console.log('from service');
        return this.todos;
    };
    TodoService.prototype.toggleItem = function (todo) {
        todo.status = !todo.status;
    };
    TodoService.prototype.deleteItem = function (todo) {
        var index = data_1.todos.indexOf(todo);
        data_1.todos.splice(index, 1);
    };
    TodoService.prototype.createItem = function (title) {
        this.todos = data_1.todos;
        var newTodo = new dataType_1.Todo(title);
        this.todos.push(newTodo);
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map