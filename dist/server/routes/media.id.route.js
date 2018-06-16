'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _media = require('../requests/media.request');

var _media2 = _interopRequireDefault(_media);

var _media3 = require('../controllers/media.controller');

var _media4 = _interopRequireDefault(_media3);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ mergeParams: true }); // eslint-disable-line new-cap

router.route('/')
/**
 * GET /api/media/{media-id}
 * Get selected media infos
 */
.get(_media4.default.get)
/**
  * PUT /api/media/{media-id}
  * Update selected media
  */
.put(_authenticate2.default, (0, _expressValidation2.default)(_media2.default.update), _media4.default.update)
/**
  * DELETE /api/media/{media-id}
  * Delete selected media
  */
.delete(_authenticate2.default, _media4.default.remove);

router.route('/comments')
/**
  * GET /api/media/{media-id}/comments
  * Get selected media commments
  */
.get(_media4.default.getComments)
/**
 * POST /api/media/{media-id}/commments
 * Post a commment in selected media
 */
.post(_authenticate2.default, (0, _expressValidation2.default)(_media2.default.createComment), _media4.default.createComment);

/**
  * DELETE /api/media/{media-id}/comments
  * Removes a comment from selected media
  */
router.route('/comments/:commentID').delete(_authenticate2.default, _media4.default.removeComment);

router.route('/comments/:commentID/flag')
/**
 * POST /api/media/{media-id}/comments/{comment-id}/flag
 * Flag a comment from selected media
 */
.post(_authenticate2.default, _media4.default.createCommentFlag)
/**
 * DELETE /api/media/{media-id}/comments/{comment-id}/flag
 * Removes flag a comment from selected media
 */
.delete(_authenticate2.default, _media4.default.removeCommentFlag);

router.route('/like')
/**
 * GET /api/media/{media-id}/comments/{comment-id}/like -
 * List the likes from selected media
 */
.get(_authenticate2.default, _media4.default.getLike)
/**
 * POST /api/media/{media-id}/comments/{comment-id}/like
 * Like a comment from selected media
 */
.post(_authenticate2.default, _media4.default.createLike)
/**
 * DELETE /api/media/{media-id}/comments/{comment-id}/like
 * Removes a like in a comment from selected media
 */
.delete(_authenticate2.default, _media4.default.removeLike);

router.route('/flag')
/**
  * POST /api/media/{media-id}/flag
  * Post a flag in selected media
  */
.post(_authenticate2.default, _media4.default.createFlag)
/**
 * DELETE /api/media/{media-id}/flag
 * Post a flag in selected media
 */
.delete(_authenticate2.default, _media4.default.removeFlag);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=media.id.route.js.map
