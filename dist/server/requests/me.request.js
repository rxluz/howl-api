'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  post: {
    body: {
      username: _joi2.default.string().required(),
      phone: _joi2.default.string().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=me.request.js.map
