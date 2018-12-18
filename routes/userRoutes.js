'use strict';
module.exports = function(app) {
  var users = require('../controllers/userController');

 
  app.route('/user')
    .get(users.getAllUsers)
    .post(users.createUser);


  app.route('/user/:userId')
    .get(users.getUser)   
    .delete(users.deleteUser);

  app.route('/username/:name')
    .get(users.getUserByName)

  app.route('/username')
    .post(users.logUser)

  app.route('/userupdate')  
    .put(users.updateUser)

  app.route('/userupdate/:username')  
    .put(users.updateUserByName)
};
