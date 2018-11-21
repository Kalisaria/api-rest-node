'use strict'
module.exports = function(app) {
    /*
    var todoList = require('../controllers/userController');

    //todoList Routes
    app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.)
    */

   var MongoClient = require('mongodb').MongoClient;
   MongoClient.connect("ds051077.mlab.com:51077/basededatos", function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
  });
}