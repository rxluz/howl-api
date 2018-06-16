'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _artists = require('../controllers/artists.controller');

var _artists2 = _interopRequireDefault(_artists);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/**
  * GET /api/artists/{user-id}/about
  * Get the selected user about
  */
router.route('/about').get(_artists2.default.about);

/**
  * GET /api/artists/{user-id}/medias
  * Get the selected user medias
  */
router.route('/medias').get(_artists2.default.medias);

router.route('/follow')
/**
  * POST /api/artists/{user-id}/follow
  * Follow the selected user
  */
.post(_authenticate2.default, _artists2.default.follow)
/**
  * DELETE /api/artists/{user-id}/follow
  * Unfollow the selected user
  */
.delete(_authenticate2.default, _artists2.default.followDelete);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=artists.id.route.js.map
