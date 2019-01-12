const express = require('express'),

    todoRepository = require('./data/todoRepository'),
    todoSorter = require('../services/todoSorter');

module.exports = function (app) {
    let todoRouter = express.Router();

    todoRouter.route('/todos/:id')
        .get(async function (req, res) {
            let id = req.params.id,
                todo = await todoRepository.get(id);

            res.send(todo);
        })
        .delete(async function (req, res) {
            let id = req.params.id;

            await todoRepository.delete(id);

            res.send('Success');
        });

    todoRouter.route('/todos')
        .get(async function(req, res) {
            let data = await todoRepository.getAll();
            res.send(todoSorter(data));
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
