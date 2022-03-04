const express = require('express');
 
const app = express();

function user(req, res) {
  res.status(200).json({ name: 'john' });
}
 
app.get('/user', user);

module.exports.app = app;