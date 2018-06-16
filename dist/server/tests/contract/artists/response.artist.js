'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _response = require('../medias/response.media');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var artists = {
  // recent artists response contract model
  recent: _joi2.default.array().items({
    _id: _joi2.default.string().required(),
    name: _joi2.default.string().required()
  }),

  // complete artists response contract model
  complete: _joi2.default.array().items({
    _id: _joi2.default.string().required(),
    name: _joi2.default.string().required()
  }),

  // complete artists response contract model
  featured: _joi2.default.array().items({
    _id: _joi2.default.string().required(),
    name: _joi2.default.string().required()
  }),

  // complete artists response contract model
  about: _joi2.default.object().keys({
    _id: _joi2.default.string().required(),
    name: _joi2.default.string().required(),
    createdAt: _joi2.default.date().required()
  }),

  medias: _response2.default.media.medias
};

exports.default = { artists: artists };
module.exports = exports['default'];
//# sourceMappingURL=response.artist.js.map
