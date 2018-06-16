'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mongoose from 'mongoose';
_chai2.default.config.includeStack = true;

/**
 * root level hooks
 */
// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {};
//   mongoose.modelSchemas = {};
//   mongoose.connection.close();
//   done();
// });

// import Joi from 'joi';
// import joiAssert from 'joi-assert';

describe('## [contract] USERS APIs', function () {
  describe('# POST /api/users/{user-id}/follow', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/users/1/follow').send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# DELETE /api/users/{user-id}/follow', function () {
    it('should return not found', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).delete('/api/users/1/follow').send({}).expect(_httpStatus2.default.NOT_FOUND).then(function () {
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=users.test.js.map
