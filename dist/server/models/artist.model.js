'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Artist Schema
 */
var ArtistSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
  },
  bio: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * @typedef User
 */
exports.default = _mongoose2.default.model('Artist', ArtistSchema);
module.exports = exports['default'];
//# sourceMappingURL=artist.model.js.map
