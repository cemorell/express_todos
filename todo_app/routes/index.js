var express = require('express');
var router = express.Router();
var List = require('../model/list')

// var todoItems = [{task: "do my laundry"}, {task: "cook dinner"}];


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'My To Do List' });
// });

// GET all items
router.get('/items', function(req, res, next){
  res.render('index', {list: List.all})
});

// GET the form to create a new item
router.get('/items/new', function(req, res, next){
  res.render('new');
});

// Create a new to do item
router.post('/items', function(req, res, next){
  new List(req.body);
  res.redirect('/items');
});

module.exports = router;
