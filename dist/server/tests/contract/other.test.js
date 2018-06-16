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

describe('## [contract] OTHER APIs', function () {
  describe('# POST /api/other/feedback', function () {
    it('should block the feedback creation', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/other/feedback').send({}).expect(_httpStatus2.default.BAD_REQUEST).then(function () {
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=other.test.js.map
