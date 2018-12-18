var express = require('express'),
  app = express(),
  port = process.env.PORT || 4562,
  mongoose = require('mongoose'),
  User = require('./models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kalisaria:patata123@ds051077.mlab.com:51077/test'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/userRoutes'); //importing route
routes(app); //register the route


app.listen(port);

