const express = require('express');
const todoRepository = require('./data/todoRepository');

module.exports = function (app) {
    let todoRouter = express.Router();
    todoRouter.route('/todos')
        .get(async function(req, res) {
            let data = await todoRepository.getAll();

            data = data.sort((a, b) => a.dueDate - b.dueDate);

            res.send(data);
        })
        .post(async function(req, res) {
            let todo = await todoRepository.save(req.body);
            res.send(todo);
        })
        .patch(async function(req, res) {
            let todo = await todoRepository.update(req.body);
            res.send(todo);
        });

    app.use('/api', todoRouter);
};
