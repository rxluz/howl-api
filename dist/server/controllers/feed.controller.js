'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _media = require('../models/media.model');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the user feed
 * inicialmente busca uma lista simples de street arts,
 * futuramente irá buscar somente as streetarts que o user segue
 * @returns {feed}
 */
function index(req, res) {
  return _media2.default.find({ active: true }).populate('owner', 'nickname picture _id about').populate('comments.owner', 'nickname picture _id about').populate('artist', 'name').sort('-createdAt').limit(20).then(function (data) {
    return res.send(getMediaResponse(data));
  });
}

function getMediaResponse(media) {
  return media.map(function (mm) {
    return _lodash2.default.pick(function (m) {
      m.likesTotal = m.likes ? m.likes.length : 0;

      m.commentsTotal = m.comments ? m.comments.length : 0;

      m.picture = m.picture !== '' ? _cloudinary2.default.url(m.picture, { width: 500, height: 500 }) : m.picture;

      if (m.comments) {
        m.comments = m.comments.slice(0, 2).map(function (mm_) {
          mm_.id = undefined;
          mm_.flags = undefined;
          return mm_;
        });
      }

      return m;
    }(mm), ['_id', 'picture', 'owner', 'artist', 'title', 'createdAt', 'place', 'comments', 'commentsTotal', 'likesTotal', 'isLiked', 'isFlagged']);
  });
}

/**
 * Get the result of user search
 * @returns {results}
 */
function search(req, res) {
  return _media2.default.find({ active: true, $text: { $search: req.params.term } }).populate('owner', 'nickname picture _id about').populate('comments.owner', 'nickname picture _id about').populate('artist', 'name').sort('-createdAt').limit(20).then(function (data) {
    return res.send(getMediaResponse(data));
  });
}

exports.default = { index: index, search: search };
module.exports = exports['default'];
//# sourceMappingURL=feed.controller.js.map
