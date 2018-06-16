'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
// const ObjectId = mongoose.Types.ObjectId;

var CommentSchema = new _mongoose2.default.Schema({
  content: {
    type: String,
    text: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  flags: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
});

/**
 * Media Schema
 */
var MediaSchema = new _mongoose2.default.Schema({
  picture: {
    type: String,
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true,
    text: true
  },
  place: {
    name: {
      type: String,
      text: true
    },
    lat: Number,
    lng: Number
  },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [CommentSchema],
  likes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  flags: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

MediaSchema.statics.findByUser = function findByUser(owner) {
  var media = this;
  return media.find({ owner: owner, active: true });
};

MediaSchema.virtual('isLiked').get(function isLiked() {
  if (!global.userID || !this.likes) return false;

  return this.likes.filter(function (l) {
    return l.owner.toString() === global.userID.toString();
  }).length > 0;
});

MediaSchema.virtual('isFlagged').get(function isFlagged() {
  if (!global.userID || !this.flags) return false;

  return this.flags.filter(function (l) {
    return l.owner.toString() === global.userID.toString();
  }).length > 0;
});

CommentSchema.virtual('isFlagged').get(function isFlagged() {
  if (!global.userID || !this.flags) return false;

  return this.flags.filter(function (fl) {
    return fl.owner.toString() === global.userID.toString();
  }).length > 0;
});

CommentSchema.set('toJSON', { getters: true, virtuals: true });
CommentSchema.set('toObject', { getters: true, virtuals: true });

MediaSchema.set('toJSON', { getters: true, virtuals: true });

MediaSchema.set('toObject', { getters: true, virtuals: true });

MediaSchema.methods.toJSON = function toJSON() {
  var media = this;
  var mediaObject = media.toObject();

  mediaObject.picture = mediaObject.picture !== '' ? _cloudinary2.default.url(mediaObject.picture, { width: 500, height: 500 }) : mediaObject.picture;

  mediaObject.comments = mediaObject.comments ? mediaObject.comments.map(function (co) {
    if (co.flags) delete co.flags;
    delete co.id;
    return co;
  }) : [];

  return _lodash2.default.pick(mediaObject, ['_id', 'picture', 'owner', 'artist', 'title', 'createdAt', 'place', 'comments', 'commentsTotal', 'likes', 'likesTotal', 'isLiked', 'isFlagged']);
};

// MediaSchema.methods.toObject = function toObject() {
//   const mediaObject = this;
//   if (!mediaObject._id) {
//     mediaObject._id = new ObjectId();
//   }
//   mediaObject.picture = (mediaObject.picture !== ''
//     ? cloudinary.url(mediaObject.picture, { width: 500, height: 500 })
//     : mediaObject.picture);
//
//   return mediaObject;
// };

CommentSchema.methods.toJSON = function toJSON() {
  var comment = this;
  var commentObject = comment.toObject();

  commentObject.id = undefined;
  commentObject.flags = undefined;
  return commentObject;
};

MediaSchema.pre('save', function pre(next) {
  var media = this;

  if (!media.isModified('picture')) {
    return next();
  }

  _cloudinary2.default.config({
    cloud_name: _config2.default.cloudinary.cloud_name,
    api_key: _config2.default.cloudinary.api_key,
    api_secret: _config2.default.cloudinary.api_secret
  });

  return _cloudinary2.default.uploader.upload(media.picture, { tags: 'infestus_media' }).then(function (image) {
    media.picture = image.public_id;
    return next();
  });
});

/**
 * @typedef User
 */
exports.default = _mongoose2.default.model('Media', MediaSchema);
module.exports = exports['default'];
//# sourceMappingURL=media.model.js.map
