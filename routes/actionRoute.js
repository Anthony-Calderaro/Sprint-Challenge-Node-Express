const express = require('express');
const actionHelper = require('../data/helpers/actionModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    actionHelper.get().then(action => {
        res.json(action);
    }).catch(err => {
        res.status(500).send('Error: ' + err)
    })
})