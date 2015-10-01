'use strict';

var passport = require('passport'),
  LocalStrategy = require('passport-local'),
  bcrypt = require('bcryptjs');

module.exports = function (app, config) {

  var auth = require('../app/middlewares/auth');

  app.use(passport.initialize());
  app.use(passport.session());

  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    return app.daos.User.readById(id).then(function (user) {
      done(null, user);
    });
  });
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function verify(email, password, done) {
      return app.daos.User.login(email).then(function (user) {
        if (user == null) return done(null, false, {
          message: 'User not found'
        });
        if (user.length === 0) return done(null, false, {
          message: 'Unknown user ' + email
        });

        bcrypt.compare(password, user.password, function (err, res) {
          if (err) return done(err);
          if (!res) return done(null, false, {
            message: 'Invalid password'
          });
          done(null, user);
        });
      });
    }
  ));
  app.post(config.url + '/login', function handleLocalAuthentication(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) return next(err);
      if (!user) {
        return res.status(401).send(info.message);
      }

      // Manually establish the session...
      req.login(user, function (err) {
        if (err) return next(err);
        return res.send(user);
      });
    })(req, res, next);
  });

  app.delete(config.url + '/logout', auth, function (req, res) {
    var email = req.user.email;
    console.log('LOGGIN OUT ' + email)
    req.logout();
    req.session.notice = 'You have successfully been logged out ' + email + '!';
  });
};