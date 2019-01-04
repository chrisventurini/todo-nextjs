const express = require('express');
const next = require('next');
const db = require('./api/data/models');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let startApp = () => {
    app.prepare()
        .then(() => {
            const server = express();
            server.use(express.urlencoded({extended: true}));
            server.use(express.json());

            require('./api')(server);
            server.get('*', (req, res) => {
                return handle(req, res)
            });

            server.listen(3000, (err) => {
                if (err) throw err;
                console.log('> Ready on http://localhost:3000')
            });

        })
        .catch((ex) => {
            console.error(ex.stack);
            process.exit(1)
        });
};

db.sequelize.sync()
    .then(startApp)
    .catch(function (e) {
        throw new Error(e);
    });