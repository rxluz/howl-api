'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users.controller');

var _users2 = _interopRequireDefault(_users);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _users3 = require('../middlewares/users.middleware');

var _users4 = _interopRequireDefault(_users3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ mergeParams: true }); // eslint-disable-line new-cap

/**
  * GET /api/users/{user-id}/about
  * isFlagged, isOwner, isLiked, LikesAmounts
  * Get the selected user about
  */
router.route('/about').get(_users2.default.about);

/**
  * GET /api/users/{user-id}/medias
  * Get the selected user medias
  */
router.route('/medias').get(_users2.default.medias);

router.route('/follow')
/**
  * POST /api/users/{user-id}/follow
  * Follow the selected user
  */
.post(_authenticate2.default, _users4.default.checkAlreadyFollowed, _users2.default.follow)
/**
  * DELETE /api/users/{user-id}/follow
  * Unfollow the selected user
  */
.delete(_authenticate2.default, _users4.default.checkAlreadyUnfollowed, _users2.default.followDelete);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=users.id.route.js.map
