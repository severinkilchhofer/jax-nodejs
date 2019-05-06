const Todo = require('../todo');
const express = require('express');

const router = express.Router();

const todos = [new Todo('Einkaufen', true), new Todo('Hausaufgaben machen', false)];

router.get('/', (request, response) => {
    response.send(todos);
});

module.exports = router;
