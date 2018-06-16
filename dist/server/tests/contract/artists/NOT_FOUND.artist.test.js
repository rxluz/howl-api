'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../../../index');

var _index2 = _interopRequireDefault(_index);

var _data = require('./data.artist');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## [contract] ARTISTS APIs (NOT_FOUND tests)', function () {
  describe('# GET /api/artists/complete/{term}', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/complete/' + _data2.default.artist.invalid.name).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/about', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/' + _data2.default.artist.invalid.id + '/about').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/medias', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/artists/' + _data2.default.artist.invalid.id + '/medias').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/artists/{artist-id}/follow', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/artists/' + _data2.default.artist.invalid.id + '/follow').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/artists/{artist-id}/follow', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/artists/' + _data2.default.artist.invalid.id + '/follow').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=NOT_FOUND.artist.test.js.map
