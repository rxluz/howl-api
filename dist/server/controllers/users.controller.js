'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _media = require('../models/media.model');

var _media2 = _interopRequireDefault(_media);

var _auxs = require('../helpers/auxs.helper');

var _auxs2 = _interopRequireDefault(_auxs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the list of recent users
 * @returns {Users}
 */
function recent(req, res) {
  return _user2.default.find().select('nickname picture createdAt').sort('-createdAt').limit(10).then(function (user) {
    return res.status(user ? 200 : 404).send(user || {});
  }).catch(function (e) {
    return res.status(500).send(e);
  });
}

/**
 * Get the list of featured users
 * @returns {Users}
 */
function featured(req, res) {
  return _user2.default.find().select('nickname picture createdAt').then(function (user) {
    return res.status(user ? 200 : 404).send(user ? _auxs2.default.sortRandomArray(user, 10) : {});
  }).catch(function (e) {
    return res.status(500).send(e);
  });
}

/**
 * Get the selected user about infos
 * @returns {User}
 */
function about(req, res) {
  return _user2.default.findOne({ _id: req.params.userID }).select('nickname bio picture createdAt').then(function (user) {
    return user ? res.send(function (u) {
      return {
        _id: u._id,
        nickname: u.nickname,
        bio: u.bio,
        picture: u.picture !== '' ? _cloudinary2.default.url(u.picture, { width: 500, height: 500 }) : u.picture,
        createdAt: u.createdAt,
        following: isFollowing(req, u._id.toString())
      };
    }(user)) : res.status(404).send();
  }).catch(function () {
    return res.status(404).send();
  });
}

function isFollowing(req, userID) {
  return req.user && req.user.following ? req.user.following.filter(function (fl) {
    return fl.toString() === userID;
  }).length > 0 : false;
}

/**
 * Get the selected user medias
 * @returns {User}
 */
function medias(req, res) {
  return _media2.default.findByUser(req.params.userID).populate('owner', 'nickname picture _id about').populate('comments.owner', 'nickname picture _id about').populate('artist', 'name').sort('-createdAt').then(function (media) {
    return media && media.length > 0 ? res.json(getMediaResponse(media)) : res.status(404).send({});
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
 * Follow the selected user
 * @returns {User}
 */
function follow(req, res) {
  req.user.following.push(req.params.userID);
  return req.user.save().then(function (u) {
    return res.send(u);
  }).catch(function () {
    return res.status(500).send();
  });
}

/**
 * Unfollow the selected user
 * @returns {User}
 */
function followDelete(req, res) {
  req.user.following = req.user.following.filter(function (fl) {
    return fl.toString() !== req.params.userID;
  });
  return req.user.save().then(function (u) {
    return res.send(u);
  }).catch(function () {
    return res.status(500).send();
  });
}

exports.default = { recent: recent, featured: featured, about: about, medias: medias, follow: follow, followDelete: followDelete };
module.exports = exports['default'];
//# sourceMappingURL=users.controller.js.map
