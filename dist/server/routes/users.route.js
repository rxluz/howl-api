'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users.controller');

var _users2 = _interopRequireDefault(_users);

var _usersId = require('./users.id.route');

var _usersId2 = _interopRequireDefault(_usersId);

var _users3 = require('../middlewares/users.middleware');

var _users4 = _interopRequireDefault(_users3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
  * GET /api/users/recent
  * Get a list of recent users
  */
router.route('/recent').get(_users2.default.recent);

/**
  * GET /api/users/featured
  * Get a list of featured users
  */
router.route('/featured').get(_users2.default.featured);

// mount user routes at /users
router.use('/:userID', _users4.default.checkUserID, _usersId2.default);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=users.route.js.map
