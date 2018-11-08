const express = require('express');

module.exports = function (app) {
    let todoRouter = express.Router();
    todoRouter.route('/todos')
        .get((req, res) => {
            res.json([{
                dueDate: new Date(),
                title: 'testing 123'
            }]);
        });

    app.use('/api', todoRouter);
};
