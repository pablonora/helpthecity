'use strict';

module.exports = function (req, res, next) {
    if (!(req.isAuthenticated())) 
      return res.status(401).send('Access denied, please log in');
    next();
};