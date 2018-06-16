'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _artists = require('../controllers/artists.controller');

var _artists2 = _interopRequireDefault(_artists);

var _artistsId = require('./artists.id.route');

var _artistsId2 = _interopRequireDefault(_artistsId);

var _artists3 = require('../middlewares/artists.middleware');

var _artists4 = _interopRequireDefault(_artists3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
  * GET /api/artists/recent
  * Get a list of recent artists
  */
router.route('/recent').get(_artists2.default.recent);

/**
  * GET /api/artists/recent
  * Get a list of recent artists
  */
router.route('/complete/:term').get(_artists2.default.complete);

/**
  * GET /api/artists/featured
  * Get a list of featured artists
  */
router.route('/featured').get(_artists2.default.featured);

// mount user routes at /artists
router.use('/:artistID', _artists4.default.checkArtistID, _artistsId2.default);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=artists.route.js.map
