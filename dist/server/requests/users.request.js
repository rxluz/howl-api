'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/user
  create: {
    body: {
      nickname: _joi2.default.string().required(),
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    }
  },

  // UPDATE /api/user
  update: {
    body: {
      nickname: _joi2.default.string(),
      email: _joi2.default.string().email(),
      bio: _joi2.default.string()
    }
  },

  // UPDATE PASSWORD /api/user/password
  updatePassword: {
    body: {
      current_password: _joi2.default.string().required(),
      new_password: _joi2.default.string().email().required()
    }
  },

  // DELETE /api/user
  disable: {
    body: {
      password: _joi2.default.string().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=users.request.js.map
