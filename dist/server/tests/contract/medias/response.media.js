'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var media = {
  // medias user response contract model
  medias: _joi2.default.array().items({
    _id: _joi2.default.string().required(),
    picture: _joi2.default.any().required(),

    owner: _joi2.default.object().required().keys({
      _id: _joi2.default.string().required(),
      nickname: _joi2.default.string().required(),
      picture: _joi2.default.any(),
      bio: _joi2.default.any()
    }),

    place: _joi2.default.object().keys({
      lng: _joi2.default.number(),
      lat: _joi2.default.number(),
      name: _joi2.default.string()
    }),

    comments: _joi2.default.array().items({
      owner: _joi2.default.object().required(),
      content: _joi2.default.string().required(),
      _id: _joi2.default.string().required(),
      date: _joi2.default.date().required(),
      isFlagged: _joi2.default.boolean().required(),
      id: _joi2.default.string()
    }),

    commentsTotal: _joi2.default.number().required(),
    likesTotal: _joi2.default.number().required(),
    isLiked: _joi2.default.boolean().required(),
    isFlagged: _joi2.default.boolean().required(),

    artist: _joi2.default.object().keys({
      _id: _joi2.default.string().required(),
      name: _joi2.default.string().required()
    }),

    title: _joi2.default.any(),
    createdAt: _joi2.default.date().required()
  })
};

exports.default = { media: media };
module.exports = exports['default'];
//# sourceMappingURL=response.media.js.map
