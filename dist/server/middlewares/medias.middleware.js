'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _media = require('../models/media.model');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkMediaID = function checkMediaID(req, res, next) {
  return _media2.default.findOne({ _id: req.params.mediaID, active: true }).then(function (media) {
    if (!media) return res.status(404).send();
    req.media = media;
    return next();
  }).catch(function () {
    return res.status(404).send();
  });
};

exports.default = { checkMediaID: checkMediaID };
module.exports = exports['default'];
//# sourceMappingURL=medias.middleware.js.map
