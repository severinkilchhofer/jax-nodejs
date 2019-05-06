const Todo = require('./todo');

class TodoModel {
    constructor() {
        this.todos = [
            new Todo('Einkaufen', true),
            new Todo('Hausaufgaben machen', false)
        ];
    }
}

module.exports = new TodoModel();
