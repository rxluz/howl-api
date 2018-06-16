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

var _data = require('./data.me');

var _data2 = _interopRequireDefault(_data);

var _response = require('./response.me');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## [contract] ME APIs (OK tests)', function () {
  describe('# POST /api/me', function () {
    it('should allow the user creation', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/me').send(_data2.default.user.ok.post).set('testing', _data2.default.common.token.testing).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.post);
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/me', function () {
    it('should allow the user update infos', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/me').set('x-auth', _data2.default.common.token.valid).set('testing', _data2.default.common.token.testing).send(_data2.default.user.ok.put).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.put);
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/me/password', function () {
    it('should allow the user update password', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/me').set('x-auth', _data2.default.common.token.valid).set('testing', _data2.default.common.token.testing).send(_data2.default.user.ok.password).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.password);
        done();
      }).catch(done);
    }).timeout(6000);
  });

  describe('# GET /api/me', function () {
    it('should allow retrieves the current user infos', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.valid).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.get);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/media', function () {
    it('should allow retrieves the current user medias', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.valid).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.medias);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/followers', function () {
    it('should allow retrieves the current user followers', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/followers').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.valid).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.followers);
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/following', function () {
    it('should allow retrieves the current user following', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/following').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.valid).expect(_httpStatus2.default.OK).then(function (res) {
        (0, _joiAssert2.default)(res.body, _response2.default.user.following);
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/me', function () {
    it('should allow disable the current user', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/me').set('x-auth', _data2.default.common.token.valid).set('testing', _data2.default.common.token.testing).send(_data2.default.user.ok.del).expect(_httpStatus2.default.OK).then(function () {
        return done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=OK.me.test.js.map
