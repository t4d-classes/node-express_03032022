'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const Colors = require('./colors');

const createAppServer = () => {

  const colors = new Colors();

  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
  );

  const app = express();

  app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms', {
      stream: accessLogStream
    })
  );

  app.use(express.urlencoded({ extended: false }));

  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');

  app.post('/remove-color/:color', (req, res) => {
    colors.removeColor(req.params.color);
    res.redirect('/');
  });

  app.post('/append-color', (req, res) => {
    colors.appendColor(req.body.color);
    res.redirect('/');
  });

  app.get('/', (req, res) => {
    res.render('home', {
      title: 'Color Tool!',
      colors: colors.allColors()
    });
  });

  return app;
};

module.exports = createAppServer;
