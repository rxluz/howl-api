'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _artist = require('../models/artist.model');

var _artist2 = _interopRequireDefault(_artist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkArtistID = function checkArtistID(req, res, next) {
  return _artist2.default.findOne({ _id: req.params.artistID, active: true }).then(function (artist) {
    if (!artist) return res.status(404).send();
    req.artist = artist;
    return next();
  }).catch(function () {
    return res.status(404).send();
  });
};

exports.default = { checkArtistID: checkArtistID };
module.exports = exports['default'];
//# sourceMappingURL=artists.middleware.js.map
