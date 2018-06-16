'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/other/feedback
  createFeedback: {
    body: {
      name: _joi2.default.string().required(),
      email: _joi2.default.string().email(),
      message: _joi2.default.string().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=other.request.js.map
