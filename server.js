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

app.get('/mission', function(req, res){
    fs.readFile('mission.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
});
});

app.get('/competition', function(req, res){
    fs.readFile('competition.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
});
});

app.get('/books', function(req, res){
    fs.readFile('books.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
});
});

app.listen(8000);