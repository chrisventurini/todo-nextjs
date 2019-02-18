const express = require('express'),

    todoRepository = require('./data/todoRepository'),
    todoSorter = require('../services/todoSorter');

let todos = {
    get: async function(req, res) {
        let defaults = { start: 0, count: 25 },
            query = {
                count: parseInt(req.query.count),
                start: parseInt(req.query.start)
            };

        query = Object.assign({}, defaults, query);

        let data = await todoRepository.getAll(query.start, query.count);

        data.collection = todoSorter(data.collection);

        res.send(data);
    },
    patch: async function(req, res) {
        let todo = await todoRepository.update(req.body);
        res.send(todo);
    },
    post: async function(req, res) {
        let todo = await todoRepository.save(req.body);
        res.status(201).send(todo);
    }
};

let todosById = {
    get: async function (req, res) {
        let { id } = req.params,
            todo = await todoRepository.getById(id);

        res.send(todo);
    },

    delete: async function (req, res) {
        let id = req.params.id;

        await todoRepository.delete(id);

        res.send('Success');
    }
};

let setupFunc = function (app) {
    let todoRouter = express.Router();

    todoRouter.route('/todos/:id')
        .get(todosById.get)
        .delete(todosById.delete);

    todoRouter.route('/todos')
        .get(todos.get)
        .post(todos.post)
        .patch(todos.patch);

    app.use('/api', todoRouter);
};

setupFunc.todos = todos;
setupFunc.todosById = todosById;

module.exports = setupFunc;
