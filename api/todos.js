const express = require('express'),

    todoRepository = require('./data/todoRepository'),
    todoSorter = require('../services/todoSorter');

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
        .get(async function(req, res) {
            let data = await todoRepository.getAll();

            data.collection = todoSorter(data.collection);

            res.send(data);
        })
        .post(async function(req, res) {
            let todo = await todoRepository.save(req.body);
            res.status(201).send(todo);
        })
        .patch(async function(req, res) {
            let todo = await todoRepository.update(req.body);
            res.send(todo);
        });

    app.use('/api', todoRouter);
};

setupFunc.todosById = todosById;

module.exports = setupFunc;
