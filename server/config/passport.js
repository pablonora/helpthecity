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
    return app.daos.usuario.readById(id).then(function (user) {
      done(null, user);
    });
  });
  
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'senha'   
    },
    function verify(email, pass, done) {
      return app.daos.usuario.readByEmail(email).then(function (user) {
//      if (err) return done(err);
        if (user.length === 0) return done(null, false, { message: 'Unknown user ' + email });
        bcrypt.compare(pass, user.senha, function(err, res) {
          if (err) return done(err);
          if (!res) return done(null, false, { message: 'Invalid password' });
          done(null, user);
        });
      });
    }
  ));
  
  app.post(config.url + '/login', function handleLocalAuthentication (req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        return res.status(401).send(info.message);
      }

      // Manually establish the session...
      req.login(user, function(err) {
        if (err) return next(err);
        return res.json({
          message: 'User authenticated',
        });
      });
    })(req, res, next);
  });
             
  app.get(config.url + '/logout', auth, function (req, res) {
    var name = req.user.username;
    console.log("LOGGIN OUT " + req.user.username)
    req.logout();
    req.session.notice = "You have successfully been logged out " + name + "!";
  });
};