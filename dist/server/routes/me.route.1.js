'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _me = require('../requests/me.request');

var _me2 = _interopRequireDefault(_me);

var _me3 = require('../controllers/me.controller');

var _me4 = _interopRequireDefault(_me3);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/')
/**
  * GET /api/user
  * Get personal user of current user
  */
.get(_authenticate2.default, _me4.default.get)

/**
 * POST /api/user
 * Create new user
 */
.post((0, _expressValidation2.default)(_me2.default.create), _me4.default.create)

/**
  * PUT /api/user
  * Update the current user infos
  */
.put(_authenticate2.default, (0, _expressValidation2.default)(_me2.default.update), _me4.default.update)

/**
  * DELETE /api/user
  * Disable the current user infos
  */
.delete(_authenticate2.default, (0, _expressValidation2.default)(_me2.default.disable), _me4.default.disable);

router.route('/password')
/**
  * PUT /api/user/password
  * Change the current user password
  */
.put(_authenticate2.default, (0, _expressValidation2.default)(_me2.default.updatePassword), _me4.default.updatePassword);

router.route('/media')
/**
  * GET /api/user/media
  * Retrieves the current user media
  */
.get(_authenticate2.default, _me4.default.getMedia);

router.route('/followers')
/**
  * GET /api/user/followers
  * Retrieves the current user followers
  */
.get(_authenticate2.default, _me4.default.getFollowers);

router.route('/following')
/**
  * GET /api/user/following
  * Retrieves the current user following users
  */
.get(_authenticate2.default, _me4.default.getFollowing);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=me.route.1.js.map
