'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auxs = require('../../../helpers/auxs.helper');

var _auxs2 = _interopRequireDefault(_auxs);

var _data = require('../data.common');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nickname = 'KK123' + _auxs2.default.getRandomInt(1, 1000);
var newNickname = 'KK123' + _auxs2.default.getRandomInt(1, 1000);
var email = 'aaa' + _auxs2.default.getRandomInt(1, 1000) + '@email.com';
var newEmail = 'aaaa' + _auxs2.default.getRandomInt(1, 1000) + '@email.com';

var user = {
  ok: {
    post: {
      nickname: nickname,
      email: email,
      password: '1234567890'
    },

    put: {
      email: newEmail,
      nickname: newNickname
    },

    del: {
      reason: 'some reason to cancel',
      password: '1234567890'
    },

    password: {
      current_password: '1234567890',
      new_password: '1234567890_'
    },

    password_restore: {
      current_password: '1234567890_',
      new_password: '1234567890'
    }
  },

  withoutNickname: {
    email: email,
    password: '1234567890'
  },

  withInvalidEmail: {
    nickname: nickname,
    email: 'invalidemail',
    password: '1234567890'
  },

  withoutPassword: {
    nickname: nickname,
    email: email
  }
};

exports.default = { user: user, common: _data2.default };
module.exports = exports['default'];
//# sourceMappingURL=data.me.js.map
