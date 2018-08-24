// Require express
var express = require('express');

//Declare a new router
var router = express.Router();

// Get the authorization helper function
 var loggedIn = require('../middleware/loggedin');

// Define routes
router.get('/', loggedIn, function(req, res){
	res.render('profile/index', {currentUser: res.locals.currentUser});
});

module.exports = router;