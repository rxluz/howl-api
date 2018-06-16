'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _artist = require('../models/artist.model');

var _artist2 = _interopRequireDefault(_artist);

var _media = require('../models/media.model');

var _media2 = _interopRequireDefault(_media);

var _auxs = require('../helpers/auxs.helper');

var _auxs2 = _interopRequireDefault(_auxs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the list of recent artists
 * @returns {artists}
 */
function recent(req, res) {
  return _artist2.default.find().select('name').limit(10).sort('-createdAt').then(function (artist) {
    return res.status(artist ? 200 : 404).send(artist || {});
  }).catch(function (e) {
    return res.status(500).send(e);
  });
}

/**
 * Autocomplete artists name
 * @returns {artists}
 */
function complete(req, res) {
  return _artist2.default.find({ name: { $regex: '.*' + req.params.term.toLowerCase() + '.*' } }).select('name').limit(10).then(function (artist) {
    return res.status(artist.length > 0 ? 200 : 404).send(artist);
  });
}

/**
 * Get the list of featured artists
 * @returns {artists}
 */
function featured(req, res) {
  return _artist2.default.find().select('name').sort('-createdAt').then(function (artist) {
    return res.status(artist ? 200 : 404).send(artist ? _auxs2.default.sortRandomArray(artist, 10) : {});
  }).catch(function (e) {
    return res.status(500).send(e);
  });
}

/**
 * Get the selected user about infos
 * @returns {User}
 */
function about(req, res) {
  return res.send(_lodash2.default.pick(req.artist, ['_id', 'name', 'createdAt']));
}

/**
 * Get the selected artist medias
 * @returns {Artist}
 */
function medias(req, res) {
  return _media2.default.find({ active: true, artist: req.artist._id }).populate('owner', 'nickname picture _id about').populate('comments.owner', 'nickname picture _id about').populate('artist', 'name').sort('-createdAt').limit(20).then(function (data) {
    return res.status(data[0] ? 200 : 404).send(data ? _auxs2.default.getMediaResponse(data) : {});
  }).catch(function (e) {
    return res.status(500).send(e);
  });
}

/**
 * Follow the selected user
 * @returns {User}
 */
function follow(req, res) {
  return res.json({ hello: 'artists_follow' });
}

/**
 * Unfollow the selected user
 * @returns {User}
 */
function followDelete(req, res) {
  return res.json({ hello: 'artists_followDelete' });
}

exports.default = { recent: recent, complete: complete, featured: featured, about: about, medias: medias, follow: follow, followDelete: followDelete };
module.exports = exports['default'];
//# sourceMappingURL=artists.controller.js.map
