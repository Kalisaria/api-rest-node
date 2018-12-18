'use strict'
  var mongoose = require('mongoose'),
    User = mongoose.model('Users');
  
  exports.getAllUsers = function(req, res) {
    console.log("getAllUsers")
    User.find({}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  
  
  exports.createUser = function(req, res) {
    const newUser = new User(req.body);
  
    User.findOne({name:newUser.name}, (err, user) => {
      if (err) return res.status(500).send({message: "Error processing request"})
      if (user) return res.status(403).send({message: "User already exists"})
  
      newUser.save(function(err, user) {
        if (err)
          return res.send(err);
        return res.json(user);
      })
    })
  }
  
  exports.logUser = function(req, res) {
    const logUser = new User(req.body);
  
    console.log(logUser)
  
    User.findOne({name:logUser.name}, (err, user) => { 
      if (err) return res.status(500).send();
      if(!user) return res.status(404).send();
      console.log(user.password);
      if( user.password === logUser.password) {
        res.json(user)
      } else {
        return res.status(404).send()
      }
    })
  }
  
  
  
  exports.getUser = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  exports.getUserByName = function(req, res) {
    var userName = req.params.name;
  
    User.findOne({name:userName}, (user, err) => {
      if (user)
        res.json(user);
      if (err)
        res.send(err);   
    })  
  };
  
  
  exports.updateUser = function(req, res) {
    console.log(JSON.stringify(req.body))
    const logUser = new User(req.body);
    
    User.findOneAndUpdate({name:logUser.name}, req.body, {new: true}, function(err, user) {
      console.log(user)
      if (err)
        res.send(err);   
      res.json(user);
    });
  };
  
  exports.updateUserByName = function(req, res) {
    const username = req.params.username;
    console.log(username)
    User.findOneAndUpdate({name:username}, req.body, {new: true}, function(err, user) {
      console.log(user)
      if (err)
        res.send(err);   
      res.json(user);
    });
  };
  
  
  exports.deleteUser = function(req, res) {
  
  
    User.remove({
      _id: req.params.userId
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    });
  };