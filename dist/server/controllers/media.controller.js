'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _media = require('../models/media.model');

var _media2 = _interopRequireDefault(_media);

var _artist = require('../models/artist.model');

var _artist2 = _interopRequireDefault(_artist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import auxs from '../helpers/auxs.helper';

var ObjectId = require('mongoose').Types.ObjectId;

/**
 * Get the featured medias
 * @returns {medias}
 */
function featured(req, res) {
  return res.json({ hello: 'media_featured' });
}

/**
 * Creates a new media
 * @returns {media}
 */
function create(req, res) {
  return req.body.artist ? findOrCreateArtist(req.body.artist).then(function (artistID) {
    return createFinish(req, res, artistID);
  }).catch(function (e) {
    return res.status(500).send(e);
  }) : createFinish(req, res);
}

function findOrCreateArtist(name) {
  return _artist2.default.findOne({ name: name.toLowerCase() }).then(function (artist) {
    if (artist) {
      return Promise.resolve(artist._id);
    }

    var artistNew = new _artist2.default({ name: name });

    return artistNew.save().then(function (artnew) {
      return Promise.resolve(artnew.id);
    }).catch(function (e) {
      return Promise.reject(e);
    });
  });
}

function createFinish(req, res, artistID) {
  var media = new _media2.default({
    picture: req.body.picture,
    owner: req.user._id,
    artist: req.body.artist ? artistID : undefined,
    title: req.body.title ? req.body.title : undefined,
    place: {
      name: req.body.place_name ? req.body.place_name : undefined,
      lat: req.body.place_lat ? req.body.place_lat : undefined,
      lng: req.body.place_lng ? req.body.place_lng : undefined
    }
  });

  return media.save().then(function (med) {
    return res.send(med);
  }).catch(function (e) {
    return res.status(400).send(e);
  });
}

function updateFinish(req, res, artistID) {
  return _media2.default.findOne({ _id: new ObjectId(req.params.mediaID), owner: req.user._id, active: true }).then(function (media) {
    media.artist = artistID ? new ObjectId(artistID) : media.artist;
    media.title = req.body.title ? req.body.title : media.title;
    media.place.name = req.body.place_name ? req.body.place_name : media.place.name;
    media.place.lat = req.body.place_lat ? req.body.place_lat : media.place.lat;
    media.place.lng = req.body.place_lng ? req.body.place_lng : media.place.lng;

    return media.save().then(function () {
      return res.send(media);
    }).catch(function (e) {
      return res.status(401).send(e);
    });
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

/**
 * Update the selected media
 * @returns {media}
 */
function update(req, res) {
  return req.body.artist ? findOrCreateArtist(req.body.artist).then(function (artistID) {
    return updateFinish(req, res, artistID);
  }).catch(function (e) {
    return res.status(500).send(e);
  }) : updateFinish(req, res);
}

/**
 * Delete the selected media
 * @returns {media}
 */
function remove(req, res) {
  return _media2.default.findOne({ _id: new ObjectId(req.params.mediaID), owner: req.user._id, active: true }).then(function (media) {
    media.active = false;

    return media.save().then(function () {
      return res.send();
    }).catch(function (e) {
      return res.status(401).send(e);
    });
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

/**
 * Get the selected media infos
 * @returns {media}
 */
function get(req, res) {
  return _media2.default.findOne({ _id: new ObjectId(req.params.mediaID), active: true }).populate('owner', 'nickname picture _id about').populate('comments.owner', 'nickname picture _id about').populate('artist', 'name').then(function (media) {
    return media ? res.send(getResponse(media)) : res.status(404).send();
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

function getResponse(media) {
  var m = media.toObject();
  m.likesTotal = m.likes ? m.likes.length : 0;
  m.commentsTotal = m.comments ? m.comments.length : 0;

  m.picture = m.picture !== '' ? _cloudinary2.default.url(m.picture, { width: 500, height: 500 }) : m.picture;

  if (m.comments) {
    m.comments = m.comments.slice(0, 2).map(function (mm) {
      mm.id = undefined;
      mm.flags = undefined;
      return mm;
    });
  }
  m.likes = undefined;

  return _lodash2.default.pick(m, ['_id', 'picture', 'owner', 'artist', 'title', 'createdAt', 'place', 'comments', 'commentsTotal', 'likes', 'likesTotal', 'isLiked', 'isFlagged']);
}

/**
 * Get the selected media comments
 * @returns {comments}
 */
function getComments(req, res) {
  return _media2.default.findOne({ _id: req.params.mediaID, active: true }).select('_id comments').populate('comments.owner', '_id nickname picture').then(function (media) {
    return media ? res.send(media) : res.status(404).send({});
  }).catch(function (e) {
    return res.status(412).send(e);
  });
}

/**
 * Post a comment in selected media
 * @returns {*}
 */
function createComment(req, res) {
  return _media2.default.findOne({ _id: req.params.mediaID, active: true }).then(function (media) {
    return media ? createCommentFinish(req, res) : res.status(404).send();
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

function createCommentFinish(req, res) {
  return _media2.default.findByIdAndUpdate(req.params.mediaID, { $push: { comments: { content: req.body.content, owner: req.user._id } }
  }, { safe: true, upsert: true }, function (err) {
    return res.status(err ? 404 : 200).send();
  });
}

/**
 * Remove a comment in selected media
 * @returns {*}
 */
function removeComment(req, res) {
  return _media2.default.findOne({
    _id: req.params.mediaID,
    'comments._id': req.params.commentID,
    active: true
  }).then(function (media) {
    if (!media) return res.status(404).send();

    var comment = media.comments.filter(function (c) {
      return c._id.toString() === req.params.commentID;
    });
    if (media.owner.toString() !== req.user._id.toString() && comment[0].owner.toString() !== req.user._id.toString()) {
      return res.status(401).send();
    }

    media.comments.id(req.params.commentID).remove();

    return media.save().then(function () {
      return res.send(media.comments);
    }).catch(function (e) {
      return res.status(500).send(e);
    });
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

/**
 * Post a flag in selected media
 * @returns {*}
 */
function createFlag(req, res) {
  return _media2.default.findOne({ _id: req.params.mediaID, active: true }).then(function (media) {
    if (!media) return res.status(404).send();

    var flagged = media.flags.filter(function (fl) {
      return fl.owner.toString() === req.user._id.toString();
    });

    if (flagged[0]) return res.status(200).send({ already: 'flagged', fl: flagged });

    return createFlagFinish(req, res);
  });
}

/**
 * Post a flag in selected media
 * @returns {*}
 */
function createFlagFinish(req, res) {
  return _media2.default.findByIdAndUpdate(req.params.mediaID, { $push: { flags: { owner: new ObjectId(req.user._id) } }
  }, { safe: true, upsert: true }, function (err) {
    return err ? res.status(404).send(err) : res.status(200).send();
  });
}

/**
 * Remove flag in selected media
 * @returns {*}
 */
function removeFlag(req, res) {
  return _media2.default.findOne({
    _id: req.params.mediaID,
    'flags.owner': req.user._id.toString(),
    active: true
  }).then(function (media) {
    if (!media) return res.status(404).send();

    var flagged = media.flags.filter(function (fl) {
      return fl.owner.toString() === req.user._id.toString();
    });
    if (!flagged[0]) return res.status(404).send();

    media.flags.id(flagged[0]._id).remove();

    return media.save().then(function () {
      return res.send();
    }).catch(function (e) {
      return res.status(500).send(e);
    });
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

/**
 * Post a flag in comment in selected media
 * @returns {*}
 */
function createCommentFlag(req, res) {
  return _media2.default.findOne({
    _id: req.params.mediaID,
    'comments._id': req.params.commentID,
    active: true
  }).then(function (media) {
    if (!media) return res.status(404).send();

    var comment = media.comments.filter(function (c) {
      return c._id.toString() === req.params.commentID;
    });

    if (!comment[0]) return res.status(401).send();

    var flagged = comment[0].flags.filter(function (fl) {
      return fl.owner.toString() === req.user._id.toString();
    });

    if (flagged[0]) return res.status(200).send({ already: 'flagged' });

    media.comments.id(comment[0]._id.toString()).flags.push({ owner: req.user._id });

    return media.save().then(function () {
      return res.send({ deu: 'certo' });
    }).catch(function (e) {
      return res.status(500).send(e);
    });
  }).catch(function (e) {
    return res.status(403).send(e);
  });
}

/**
 * Remove flag in a comment in selected media
 * @returns {*}
 */
function removeCommentFlag(req, res) {
  return _media2.default.findOne({
    _id: req.params.mediaID,
    'comments._id': req.params.commentID,
    active: true
  }).then(function (media) {
    if (!media) return res.status(404).send(1);

    var comment = media.comments.filter(function (c) {
      return c._id.toString() === req.params.commentID;
    });

    if (!comment[0]) return res.status(404).send(2);

    if (!comment[0].flags) return res.status(404).send(2);

    var flagged = comment[0].flags.filter(function (fg) {
      return fg.owner.toString() === req.user._id.toString();
    });

    if (!flagged[0]) return res.status(404).send(3);

    media.comments.id(comment[0]._id.toString()).flags.id(flagged[0]._id.toString()).remove();

    return media.save().then(function () {
      return res.send();
    }).catch(function (e) {
      return res.status(500).send(e);
    });
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

/**
 * Post a Like in selected media
 * @returns {*}
 */
function createLike(req, res) {
  return _media2.default.findOne({ _id: req.params.mediaID, active: true }).then(function (media) {
    if (!media) return res.status(404).send();

    var liked = media.likes.filter(function (fl) {
      return fl.owner.toString() === req.user._id.toString();
    });

    if (liked[0]) return res.status(200).send({ already: 'liked', fl: liked });

    return createLikeFinish(req, res);
  });
}

/**
 * Post a Like in selected media
 * @returns {*}
 */
function createLikeFinish(req, res) {
  return _media2.default.findByIdAndUpdate(req.params.mediaID, { $push: { likes: { owner: new ObjectId(req.user._id) } }
  }, { safe: true, upsert: true }, function (err) {
    return err ? res.status(404).send(err) : res.status(200).send();
  });
}

/**
 * Remove Like in selected media
 * @returns {*}
 */
function removeLike(req, res) {
  return _media2.default.findOne({
    _id: req.params.mediaID,
    'likes.owner': req.user._id.toString(),
    active: true
  }).then(function (media) {
    if (!media) return res.status(404).send();

    var liked = media.likes.filter(function (fl) {
      return fl.owner.toString() === req.user._id.toString();
    });
    if (!liked[0]) return res.status(404).send();

    media.likes.id(liked[0]._id).remove();

    return media.save().then(function () {
      return res.send();
    }).catch(function (e) {
      return res.status(500).send(e);
    });
  }).catch(function (e) {
    return res.status(404).send(e);
  });
}

/**
 * Get the featured medias
 * @returns {medias}
 */
function getLike(req, res) {
  return _media2.default.findOne({ _id: req.params.mediaID }).select('likes').populate('likes.owner', '_id nickname picture').then(function (media) {
    return media ? res.send({ total: media.likes.length, likes: media.likes }) : res.status(404).send();
  }).catch(function (e) {
    return res.status(500).send(e);
  });
}

exports.default = {
  featured: featured,
  create: create,
  update: update,
  remove: remove,
  get: get,
  getComments: getComments,
  createComment: createComment,
  removeComment: removeComment,
  createFlag: createFlag,
  removeFlag: removeFlag,
  createCommentFlag: createCommentFlag,
  removeCommentFlag: removeCommentFlag,
  getLike: getLike,
  createLike: createLike,
  removeLike: removeLike
};
module.exports = exports['default'];
//# sourceMappingURL=media.controller.js.map
