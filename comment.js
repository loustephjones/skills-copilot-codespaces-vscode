// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');

// Setting for server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Create web server
var port = process.env.PORT || 8080;
var router = express.Router();

// Routing
router.get('/', function(req, res) {
  res.json({ message: 'Hello World!' });
});

router.route('/comments')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/comments.json', 'utf8', function(err, data) {
      res.json(JSON.parse(data));
    });
  })
  .post(function(req, res) {
    fs.readFile(__dirname + '/data/comments.json', 'utf8', function(err, data) {
      var comments = JSON.parse(data);
      var newComment = {
        id: Date.now(),

