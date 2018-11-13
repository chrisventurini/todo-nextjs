const express = require('express');
const todoRepository = require('../data/todoRepository');

module.exports = function (app) {
    let todoRouter = express.Router();
    todoRouter.route('/todos')
        .get(async function(req, res) {
            let data = await todoRepository.getAll();
            res.send(data);
        })
        .post((req, res) => {
            todoRepository.save(req.body);
            res.send("Success");
        });

    app.use('/api', todoRouter);
};
