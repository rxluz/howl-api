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

describe('## [contract] MEDIAS APIs (BAD_REQUEST tests)', function () {
  describe('# POST /api/media/{media-id}/comments', function () {
    it('should return bad request', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media/' + _data2.default.media.valid.id + '/comments').set('x-auth', _data2.default.common.token.valid).set('testing', _data2.default.common.token.testing).send({}).expect(_httpStatus2.default.BAD_REQUEST).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/media', function () {
    it('should return bad request', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/media').set('x-auth', _data2.default.common.token.valid).set('testing', _data2.default.common.token.testing).send().expect(_httpStatus2.default.BAD_REQUEST).then(function () {
        done();
      }).catch(done);
    });
  });

  // describe('# PUT /api/media/{media-id}', () => {
  //   it('should return bad request', (done) => {
  //     request(app)
  //       .put(`/api/media/${data.media.valid.id}`)
  //       .set('x-auth', data.common.token.valid)
  //       .set('testing', data.common.token.testing)
  //       .send({ place_lat: 'text' })
  //       .expect(httpStatus.BAD_REQUEST)
  //       .then(() => {
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });
});
//# sourceMappingURL=BAD_REQUEST.media.test.js.map
