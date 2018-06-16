'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

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
  upVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  downVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
});

var ThreadSchema = new _mongoose2.default.Schema({
  content: {
    type: String,
    trim: true,
    required: true
  },
  timer: {
    type: String,
    trim: true,
    text: true
  },
  comments: [CommentSchema],
  upVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  downVotes: [{
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

ThreadSchema.statics.findByUser = function findByUser(owner) {
  var media = this;
  return media.find({ owner: owner, active: true });
};

CommentSchema.virtual('isFlagged').get(function isFlagged() {
  if (!global.userID || !this.flags) return false;

  return this.flags.filter(function (fl) {
    return fl.owner.toString() === global.userID.toString();
  }).length > 0;
});

ThreadSchema.set('toJSON', { getters: true, virtuals: true });
ThreadSchema.set('toObject', { getters: true, virtuals: true });

ThreadSchema.set('toJSON', { getters: true, virtuals: true });

ThreadSchema.set('toObject', { getters: true, virtuals: true });

exports.default = _mongoose2.default.model('Thread', ThreadSchema);
module.exports = exports['default'];
//# sourceMappingURL=thread.model.js.map
