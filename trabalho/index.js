var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("http://127.0.0.1:8000")
})

app.use(router)

console.log("Simple API Gateway run on http://127.0.0.1:8000")

app.listen(8000);