'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tags = require('../controllers/tags.controller');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
 * GET /api/tags/recent
 * Get a list of recent tags
 */
router.route('/recent').get(_tags2.default.recent);

/**
  * GET /api/tags/featured
  * Get a list of featured tags
  */
router.route('/featured').get(_tags2.default.featured);

/**
  * GET /api/tags/{tag-id}/medias
  * Get medias by tag id
  */
router.route('/:tagID/medias').get(_tags2.default.medias);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=tags.route.js.map
