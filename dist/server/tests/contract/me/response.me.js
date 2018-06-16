'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _response = require('../medias/response.media');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  // post user response contract model
  post: _joi2.default.object().keys({
    token: _joi2.default.string().required(),

    user: _joi2.default.object().keys({
      _id: _joi2.default.string().required(),
      email: _joi2.default.string().email().required(),
      nickname: _joi2.default.string().required(),
      createdAt: _joi2.default.date().required(),
      following: _joi2.default.array()
    })
  }),

  // put user response contract model
  put: _joi2.default.object().keys({
    _id: _joi2.default.string().required(),
    email: _joi2.default.string().email().required(),
    nickname: _joi2.default.string().required(),
    createdAt: _joi2.default.date().required(),
    following: _joi2.default.array(),
    bio: _joi2.default.any(),
    picture: _joi2.default.any()
  }),

  // get user response contract model
  get: _joi2.default.object().keys({
    _id: _joi2.default.string().required(),
    email: _joi2.default.string().email().required(),
    nickname: _joi2.default.string().required(),
    createdAt: _joi2.default.date().required(),
    following: _joi2.default.array(),
    bio: _joi2.default.any(),
    picture: _joi2.default.any(),
    likesReceveid: _joi2.default.number()
  }),

  // get user followers response contract model
  followers: _joi2.default.object().keys({
    total: _joi2.default.number().required(),
    followers: _joi2.default.array().items({
      _id: _joi2.default.string().required(),
      nickname: _joi2.default.string().required(),
      picture: _joi2.default.any().required()
    })
  }),

  // get user followers response contract model
  following: _joi2.default.object().keys({
    total: _joi2.default.number().required(),
    following: _joi2.default.array().items({
      _id: _joi2.default.string().required(),
      nickname: _joi2.default.string().required(),
      picture: _joi2.default.any().required()
    })
  }),

  // medias user response contract model
  medias: _response2.default.media.medias,

  // password user response contract model
  password: _joi2.default.object().keys({
    _id: _joi2.default.string().required(),
    email: _joi2.default.string().email().required(),
    nickname: _joi2.default.string().required(),
    createdAt: _joi2.default.date().required(),
    following: _joi2.default.array(),
    bio: _joi2.default.any(),
    picture: _joi2.default.any()
  }),

  // password user response contract model
  delete: _joi2.default.object().keys({
    _id: _joi2.default.string().required(),
    email: _joi2.default.string().email().required(),
    nickname: _joi2.default.string().required(),
    createdAt: _joi2.default.date().required(),
    following: _joi2.default.array(),
    bio: _joi2.default.any(),
    picture: _joi2.default.any()
  })
};

exports.default = { user: user };
module.exports = exports['default'];
//# sourceMappingURL=response.me.js.map
