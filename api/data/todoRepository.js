const db = require('./models');

let todoRepository = {

    delete: async function(id) {
        await db.Todo.destroy({
            where: {
                id: id
            }
       });
    },

    getById: async function(id) {
        return await db.Todo.findOne({
            where: {
                id: id
            }
        });
    },

    getAll: async function(options) {
        if (options) {
            options = {
                where: {
                    ...options
                }
            }
        }

        let data = await db.Todo.findAndCountAll(options);

        return {
            count: data.count,
            collection: data.rows
        };
    },

    save: async function(todo) {
        let todoModel = db.Todo.build(todo);

        await todoModel.save();

        todo.id = todoModel.id;

        return todo;
    },
    update: async function(todo) {
        let todoModel = await db.Todo.findOne({
            where: {
                id: todo.id
            }
        });

        await todoModel.update(todo);

        return todo;
    }
};

module.exports = todoRepository;