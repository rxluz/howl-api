'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _media = require('../controllers/media.controller');

var _media2 = _interopRequireDefault(_media);

var _mediaId = require('./media.id.route');

var _mediaId2 = _interopRequireDefault(_mediaId);

var _media3 = require('../requests/media.request');

var _media4 = _interopRequireDefault(_media3);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _medias = require('../middlewares/medias.middleware');

var _medias2 = _interopRequireDefault(_medias);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
 * GET /api/media
 * Get the featured medias list
 */
router.route('/featured').get(_media2.default.featured);

/**
 * POST /api/media
 * Post a new media
 */
router.route('/').post(_authenticate2.default, (0, _expressValidation2.default)(_media4.default.create), _media2.default.create);

// mount user routes at /artists
router.use('/:mediaID', _medias2.default.checkMediaID, _mediaId2.default);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=media.route.js.map
