var express = require('express');
var db = require('../utils/db.js');
var auth = require('../utils/auth.js');
var passport = require('passport');
var router = express.Router();

/**
 * Returns the message data to be sent in the response
 * This is what can ultimately be accessed by the templates
 *
 * @param {Object} req - request data from client
 */
function buildMessage(req) {
  return {
    title: 'Title',
    user: req.user,
    error: req.flash('error'),
    warning: req.flash('warning'),
    info: req.flash('info'),
    success: req.flash('success'),
  }
}

/* GET home page. 
 * req - request from client
 * res - response to the client
 * next - passing through one middleware to the next. Middleware is a chain of functions
 */
router.get('/', function(req, res, next) {
  res.render('index', buildMessage(req));
});


/* GET secure page. 
 * Example of using another 'middleware' to ensure that the user is logged in, or 
 * bump the client to the login different page if not.
 *
 * To see implementation of this, check out - utils/auth.js
 */
router.get('/securepage', auth.ensureUserLoggedIn, function(req, res, next) {
  res.render('securepage', buildMessage(req));
});

module.exports = router;