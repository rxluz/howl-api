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
var FeedbackSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String
  },
  message: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

/**
 * @typedef User
 */
exports.default = _mongoose2.default.model('Feedback', FeedbackSchema);
module.exports = exports['default'];
//# sourceMappingURL=feedback.model.js.map
