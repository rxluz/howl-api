'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _joiAssert = require('joi-assert');

var _joiAssert2 = _interopRequireDefault(_joiAssert);

var _index = require('../../../../index');

var _index2 = _interopRequireDefault(_index);

var _data = require('./data.artist');

var _data2 = _interopRequireDefault(_data);

var _response = require('./response.artist');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## [contract] ARTISTS APIs (OK tests)', function () {
  describe('# GET /api/artists/recent', function () {
    it('should return the recently added artists', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/recent').set('testing', _data2.default.common.token.testing).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.artists.recent);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/artists/complete/{term}', function () {
    it('should return the artists related with the searched term', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/complete/a').set('testing', _data2.default.common.token.testing).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.artists.complete);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/artists/featured', function () {
    it('should return the featured artists', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/featured').set('testing', _data2.default.common.token.testing).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.artists.featured);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/about', function () {
    it('should return the featured artists', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/' + _data2.default.artist.valid.id + '/about').set('testing', _data2.default.common.token.testing).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.artists.about);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/medias', function () {
    it('should return artist media', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/' + _data2.default.artist.valid.id + '/medias').set('testing', _data2.default.common.token.testing).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.artists.medias);
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=OK.artist.test.js.map
