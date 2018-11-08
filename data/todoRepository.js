const db = require('../models');

let todoRepository = {
    getAll: () => {
        return db.Todo.findAll()
    }
};

module.exports = todoRepository;