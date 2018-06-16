'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: {
    query: {
      type: _joi2.default.string().valid('relevant', 'recent', 'paid', 'mine'),
      lat: _joi2.default.number().required(),
      long: _joi2.default.number().required(),
      range: _joi2.default.number().required()
    }
  },

  post: {
    body: {
      content: _joi2.default.string().required(),
      timer: _joi2.default.number(),
      price: _joi2.default.number()
    }
  }

};
module.exports = exports['default'];
//# sourceMappingURL=threads.request.js.map
