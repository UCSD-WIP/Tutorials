// Imports
var express = require('express');
var fs = require('fs');
var hbs = require('hbs');
var path = require('path');

var app = express();

// some other stuff ...

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Register partials
hbs.registerPartial("alerts", fs.readFileSync("views/partials/alerts.hbs", 'utf8'));

// some other setup stuff ...