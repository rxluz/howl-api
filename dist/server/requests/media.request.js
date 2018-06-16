'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/media
  create: {
    body: {
      picture: _joi2.default.string().required(),
      place_lat: _joi2.default.number(),
      place_lng: _joi2.default.number(),
      place: _joi2.default.string(),
      artist: _joi2.default.string(),
      title: _joi2.default.string()
    }
  },

  // PUT /api/media/{media-id}
  update: {
    params: {
      mediaID: _joi2.default.string().required()
    },
    body: {
      lat: _joi2.default.number(),
      lng: _joi2.default.number(),
      place: _joi2.default.string(),
      artist: _joi2.default.string(),
      tite: _joi2.default.string()
    }
  },

  // POST /api/media/{media-id}/comments
  createComment: {
    params: {
      mediaID: _joi2.default.string().required()
    },
    body: {
      content: _joi2.default.string().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=media.request.js.map
