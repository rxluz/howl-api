'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../../../index');

var _index2 = _interopRequireDefault(_index);

var _data = require('./data.media');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## [contract] MEDIAS APIs (UNAUTHORIZED tests)', function () {
  describe('# GET /api/media/featured', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/media/featured').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/media', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# PUT /api/media', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).put('/api/media/' + _data2.default.media.valid.id).set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/media/' + _data2.default.media.valid.id).set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/media/{media-id}', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/media/' + _data2.default.media.valid.id).set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/media/{media-id}/comments', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).get('/api/media/' + _data2.default.media.valid.id + '/comments').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/comments', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media/' + _data2.default.media.valid.id + '/comments').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comments', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/media/' + _data2.default.media.valid.id + '/comments').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/comments/{comment-id}/flag', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media/' + _data2.default.media.valid.id + '/comments/' + _data2.default.media.valid.comment_id + '/flag').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comments/{comment-id}/flag', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/media/' + _data2.default.media.valid.id + '/comments/' + _data2.default.media.valid.comment_id + '/flag').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/like', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media/' + _data2.default.media.valid.id + '/like').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/like', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/media/' + _data2.default.media.valid.id + '/like').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/flag', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media/' + _data2.default.media.valid.id + '/flag').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/flag', function () {
    it('should return unauthorized', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/media/' + _data2.default.media.valid.id + '/flag').set('x-auth', _data2.default.common.token.invalid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.UNAUTHORIZED).then(function () {
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=UNAUTHORIZED.media.test.js.map
