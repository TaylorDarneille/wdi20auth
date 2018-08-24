// Require express
var express = require('express');
var passport = require('../config/passportConfig');

// Include the models
var db = require('../models');

//Declare a new router
var router = express.Router();

// Define routes
router.get('/login', function(req, res){
	res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'Successfully logged in!',
	failureRedirect: '/auth/login',
	failureFlash: 'Unable to login!'
}));

router.get('/signup', function(req, res){
	res.render('auth/signup');
});

router.post('/signup', function(req, res){
	db.user.findOrCreate({
		where: {email: req.body.email},
		defaults: req.body
	}).spread(function(user, wasCreated){
		if(wasCreated) {
			// Automatically log the user in!
			passport.authenticate('local', {
				successRedirect: '/profile',
				successFlash: 'Successfully logged in!',
				failureRedirect: '/auth/login',
				failureFlash: 'Signup failed!'
			})(req, res);
		} else {
			// TODO: Send the user some sort of error message
			req.flash('error', 'Please login');
			res.redirect('/auth/login');
		}
	}).catch(function(err){
		req.flash('error', err.message);
		res.redirect('/auth/signup');
	});
});

router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'Successfully logged out!');
	res.redirect('/');
});

module.exports = router;