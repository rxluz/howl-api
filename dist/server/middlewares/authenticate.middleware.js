'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authenticate = function authenticate(req, res, next) {
  var username = req.header('Authorisation');

  return !global.userID ? _user2.default.findByUsername(username).then(function (user) {
    if (!user) {
      return res.status(401).send();
    }

    req.user = user;
    return next();
  }).catch(function () {
    return res.status(401).send();
  }) : next();
};

exports.default = authenticate;
module.exports = exports['default'];
//# sourceMappingURL=authenticate.middleware.js.map
