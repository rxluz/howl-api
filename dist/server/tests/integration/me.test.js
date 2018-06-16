'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _index = require('../../../index');

var _index2 = _interopRequireDefault(_index);

var _auxs = require('../../helpers/auxs.helper');

var _auxs2 = _interopRequireDefault(_auxs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Joi from 'joi';
// import joiAssert from 'joi-assert';

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

// import mongoose from 'mongoose';
describe('## [contract] ME APIs', function () {
  var nickname = 'KK123' + _auxs2.default.getRandomInt(1, 1000);
  var email = _auxs2.default.getRandomInt(1, 1000) + '@email.com';
  var user = {
    nickname: nickname,
    email: email,
    password: '1234567890'
  };

  describe('# POST /api/me', function () {
    it('should allow the user creation', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/me').send(user).expect(_httpStatus2.default.OK).then(function () {
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=me.test.js.map
