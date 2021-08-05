var express = require('express');
var htmlController = require('./controllers/htmlController');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/',htmlController);

app.use((req, res,next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });

var port = process.env.PORT || 3000;

app.listen(port);

console.log('app started on port: ' + port);