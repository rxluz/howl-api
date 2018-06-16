'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkUserIsLogged = function checkUserIsLogged(req, res, next) {
  global.userID = undefined;
  global.testing = (req.header('testing') || {}).toString() === _config2.default.testingKey;

  if (req.header('x-auth')) {
    var token = req.header('x-auth');

    return _user2.default.findByToken(token).then(function (user) {
      if (!user) return next();
      global.userID = user._id;
      req.user = user;
      req.token = token;
      return next();
    }).catch(function () {
      return res.status(401).send();
    });
  }

  return next();
};

exports.default = checkUserIsLogged;
module.exports = exports['default'];
//# sourceMappingURL=checkUserIsLogged.middleware.js.map
