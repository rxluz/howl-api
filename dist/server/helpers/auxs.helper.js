'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auxs = {
  getRandomInt: function getRandomInt(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  },

  getMediaResponse: function getMediaResponse(media) {
    return media.map(function (mm) {
      return _lodash2.default.pick(function (m) {
        m.likesTotal = m.likes ? m.likes.length : 0;

        m.commentsTotal = m.comments ? m.comments.length : 0;

        m.picture = m.picture !== '' ? _cloudinary2.default.url(m.picture, { width: 500, height: 500 }) : m.picture;

        if (m.comments) {
          m.comments = m.comments.slice(0, 2).map(function (mmm) {
            mmm.id = undefined;
            mmm.flags = undefined;
            return mmm;
          });
        }

        return m;
      }(mm), ['_id', 'picture', 'owner', 'artist', 'title', 'createdAt', 'place', 'comments', 'commentsTotal', 'likesTotal', 'isLiked', 'isFlagged']);
    });
  },

  sortRandomArray: function sortRandomArray(arrayNum, count) {
    var tmp = arrayNum.slice(arrayNum);
    var ret = [];

    for (var i = 0; i < count; i += 1) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      ret.push(removed[0]);
    }
    return ret.filter(function (re) {
      return re !== undefined;
    });
  }
};

exports.default = auxs;
module.exports = exports['default'];
//# sourceMappingURL=auxs.helper.js.map
