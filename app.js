'use strict'

const express = require('express')
const app = express()
 
const initializeDatabases = require('./dbs')
const routes = require('./routes')
 
initializeDatabases().then(dbs => {
  // Initialize the application once database connections are ready.
  routes(app, dbs).listen(4562, () => console.log('Listening on port 3000'))
}).catch(err => {
  console.error('Failed to make all database connections!')
  console.error(err)
  process.exit(1)
})
