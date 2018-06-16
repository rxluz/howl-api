'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _feed = require('../controllers/feed.controller');

var _feed2 = _interopRequireDefault(_feed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
  * GET /api/feed
  * Get the user feed
  */
router.route('/').get(_feed2.default.index);

/**
  * GET /api/feed/search/:term
  * Get the results of user search
  */
router.route('/search/:term').get(_feed2.default.search);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=feed.route.js.map
