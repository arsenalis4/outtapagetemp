var express = require ('express');
var fs = require ('fs');
var app = express ();
var router = express.Router();
app.use(express.static(__dirname + '/everything'));
app.use(express.static(__dirname + '/faceimage'));

app.get('/', function(req, res){
    fs.readFile('index.html', function(error, data){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
});
});

app.get('/why', function(req, res){
    fs.readFile('whoweare.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
});
});

app.get('/whoweare', function(req, res){
    fs.readFile('introduce.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
});
});

app.listen(8000);