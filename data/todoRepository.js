const db = require('../models');

let todoRepository = {
    getAll: async function() {
        return await db.Todo.findAll()
    },
    save: async function(todo) {
        let todoModel = db.Todo.build(todo);

        await todoModel.save()
    }
};

module.exports = todoRepository;