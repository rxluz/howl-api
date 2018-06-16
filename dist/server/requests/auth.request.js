'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/user
  login: {
    body: {
      nickname: _joi2.default.string().required(),
      password: _joi2.default.string().required()
    }
  },

  // POST /api/auth/recover/request
  recoverRequest: {
    body: {
      email: _joi2.default.string().email().required()
    }
  },

  // PUT /api/auth/recover/restore/{code}
  recoverRestore: {
    params: {
      code: _joi2.default.string().required()
    },
    body: {
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    }
  },

  // GET /api/auth/recover/restore/{code}
  recoverCheck: {
    params: {
      code: _joi2.default.string().required()
    },
    body: {
      email: _joi2.default.string().email().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=auth.request.js.map
