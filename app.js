const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const pageRouter = require('./api/t1/t1router');
const apiErrorHandler = require('./error/apierrorhandler');

app.use('/', pageRouter);
//handling errors
app.use((err, req, res, next)=>{
    res.status(err.status || 500 );
    res.send(err.message);
});

app.use(apiErrorHandler);
//setting up the server
app.listen (3000, ()=>{
    console.log('Server successfully stared on port 3000....');
});

module.exports = app;