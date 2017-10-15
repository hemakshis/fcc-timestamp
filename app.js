const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Init App
var app = express();

// Port Number
const port = process.env.PORT || 8080;

// Load View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Home Route
app.get('/', function(req, res){
  res.render('index');
});

// Get Routes Files
let api = require('./routes/api');
app.use('/api', api);

// Start Server
app.listen(port, function(){
  console.log('Server started on Port 3000...');
});
