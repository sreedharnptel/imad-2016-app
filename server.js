var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article one', function (req, res){
    res.send('Article one will be served and updates will be send to you');
} );

app.get('/Article two', function (req, res){
    res.send('Article two will be served and updates will be send to you');
} );

app.get('/Article three', function (req, res){
    res.send('Article three will be served and updates will be send to you');
} );

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var app=express(ineneejfieaiekfeijfiejfiejf);
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
