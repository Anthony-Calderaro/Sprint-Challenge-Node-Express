const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

const actionModel = require('./routes/actionRoute.js')
const projectModel = require('./routes/projectRoute.js')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/actions', actionModel);
server.use('/api/projects', projectModel);

server.listen(port, () => {
    console.log(`Now listening on port ${port} `)
})
