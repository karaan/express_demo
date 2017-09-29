var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// confgure app

app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



///use middleware

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'views')));

//define routes


    
app.get('/' , function (req, res) {
    //load data fromDB here 
   
    res.render('index', { 
        title: 'Myapp',
       
     });         
});


        
        
app.listen (1337, function () {
    console.log('ready on port 1337');
    });


