'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _auth = require('../requests/auth.request');

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = require('../controllers/auth.controller');

var _auth4 = _interopRequireDefault(_auth3);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
  * POST /api/auth/login
  * Returns token if correct username and password is provided
  */
router.route('/login').post((0, _expressValidation2.default)(_auth2.default.login), _auth4.default.login);

/**
  * DELETE /api/auth/logout
  * Returns token if correct username and password is provided
  */
router.route('/logout').delete(_authenticate2.default, _auth4.default.logout);

/**
  * POST /api/auth/recover/request
  */
router.route('/recover/request').post((0, _expressValidation2.default)(_auth2.default.recoverRequest), _auth4.default.recoverRequest);

/**
  * GET /api/auth/recover/restore/:code
  * Return a valid token if the code is valid
  */
router.route('/recover/restore/:code').put((0, _expressValidation2.default)(_auth2.default.recoverRestore), _auth4.default.recoverRestore);

/**
  * POST /api/auth/recover/check/:code
  * Check if the code is valid
  */
router.route('/recover/check/:code').post((0, _expressValidation2.default)(_auth2.default.recoverCheck), _auth4.default.recoverCheck);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
// router.route('/random-number')
//   .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=auth.route.js.map
