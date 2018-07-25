const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

const actionModel = require('./data/routes/actionRoute.js')
const projectModel = require('./data/RouteHandlers/projectRoute.js')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/actions', actionRoute);
server.use('/api/projects', projectRoute);

server.listen(port, () => {
    console.log(`Now listening on port ${port} `)
})
