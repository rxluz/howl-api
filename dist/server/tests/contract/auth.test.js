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

describe('## [contract] Auth APIs', function () {
  describe('# POST /api/auth/login', function () {
    it('should block the user auth', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/auth/login').send({}).expect(_httpStatus2.default.BAD_REQUEST).then(function () {
        done();
      }).catch(done);
    });
  });

  describe('# POST /api/auth/recover/request', function () {
    it('should block the user recover request', function (done) {
      (0, _supertestAsPromised2.default)(_index2.default).post('/api/auth/recover/request').send({}).expect(_httpStatus2.default.BAD_REQUEST).then(function () {
        done();
      }).catch(done);
    });
  });
});

// import request from 'supertest-as-promised';
// import httpStatus from 'http-status';
// import jwt from 'jsonwebtoken';
// import chai, { expect } from 'chai';
// import app from '../../index';
// import config from '../../config/config';
//
// chai.config.includeStack = true;
//
// describe('## Auth APIs', () => {
//   const validUserCredentials = {
//     username: 'react',
//     password: 'express'
//   };
//
//   const invalidUserCredentials = {
//     username: 'react',
//     password: 'IDontKnow'
//   };
//
//   let jwtToken;
//
//   describe('# POST /api/auth/login', () => {
//     it('should return Authentication error', (done) => {
//       request(app)
//         .post('/api/auth/login')
//         .send(invalidUserCredentials)
//         .expect(httpStatus.UNAUTHORIZED)
//         .then((res) => {
//           expect(res.body.message).to.equal('Authentication error');
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should get valid JWT token', (done) => {
//       request(app)
//         .post('/api/auth/login')
//         .send(validUserCredentials)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body).to.have.property('token');
//           jwt.verify(res.body.token, config.jwtSecret, (err, decoded) => {
//             expect(err).to.not.be.ok; // eslint-disable-line no-unused-expressions
//             expect(decoded.username).to.equal(validUserCredentials.username);
//             jwtToken = `Bearer ${res.body.token}`;
//             done();
//           });
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/auth/random-number', () => {
//     it('should fail to get random number because of missing Authorization', (done) => {
//       request(app)
//         .get('/api/auth/random-number')
//         .expect(httpStatus.UNAUTHORIZED)
//         .then((res) => {
//           expect(res.body.message).to.equal('Unauthorized');
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should fail to get random number because of wrong token', (done) => {
//       request(app)
//         .get('/api/auth/random-number')
//         .set('Authorization', 'Bearer inValidToken')
//         .expect(httpStatus.UNAUTHORIZED)
//         .then((res) => {
//           expect(res.body.message).to.equal('Unauthorized');
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should get a random number', (done) => {
//       request(app)
//         .get('/api/auth/random-number')
//         .set('Authorization', jwtToken)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.num).to.be.a('number');
//           done();
//         })
//         .catch(done);
//     });
//   });
// });
//# sourceMappingURL=auth.test.js.map
