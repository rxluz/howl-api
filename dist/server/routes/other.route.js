'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _other = require('../controllers/other.controller');

var _other2 = _interopRequireDefault(_other);

var _other3 = require('../requests/other.request');

var _other4 = _interopRequireDefault(_other3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
 * POST /api/other/feedback
 * Post the user feedback
 */
router.route('/feedback').post((0, _expressValidation2.default)(_other4.default.createFeedback), _other2.default.createFeedback);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=other.route.js.map
