'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkUserID = function checkUserID(req, res, next) {
  return _user2.default.find({ _id: req.params.userID }).then(function (user) {
    return user ? next() : res.status(404).send();
  }).catch(function () {
    return res.status(404).send();
  });
};

var checkAlreadyFollowed = function checkAlreadyFollowed(req, res, next) {
  return !req.user.following || req.user.following.filter(function (c) {
    return c.toString() === req.params.userID;
  }).length === 0 ? next() : res.status(412).send();
};

var checkAlreadyUnfollowed = function checkAlreadyUnfollowed(req, res, next) {
  return req.user.following && req.user.following.filter(function (c) {
    return c.toString() === req.params.userID;
  }).length > 0 ? next() : res.status(412).send();
};

exports.default = { checkUserID: checkUserID, checkAlreadyUnfollowed: checkAlreadyUnfollowed, checkAlreadyFollowed: checkAlreadyFollowed };
module.exports = exports['default'];
//# sourceMappingURL=users.middleware.js.map
