'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../../../index');

var _index2 = _interopRequireDefault(_index);

var _data = require('./data.me');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## [contract] ME APIs (UNAUTHORIZED tests)', function () {
  describe('# GET /api/me', function () {
    it('should return unauthorized (invalid token)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/me', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/me').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/me', function () {
    it('should return unauthorized (invalid token)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/me').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.invalid).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/me/password', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/me/password').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/me/password', function () {
    it('should return unauthorized (invalid token)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/me/password').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.invalid).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/me', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/me').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/me', function () {
    it('should return unauthorized (invalid token)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/me').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.invalid).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/media', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/media', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.invalid).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/followers', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/followers', function () {
    it('should return unauthorized (invalid token)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.invalid).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/following', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/me/following', function () {
    it('should return unauthorized (invalid token)', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/me/media').set('testing', _data2.default.common.token.testing).set('x-auth', _data2.default.common.token.invalid).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=UNAUTHORIZED.me.test.js.map
