const express = require('express');
const router = require('./todo');

const app = express();

app.use('/todo', router);

app.listen(8080);
