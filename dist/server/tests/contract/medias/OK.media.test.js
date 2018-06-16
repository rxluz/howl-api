// import request from 'supertest-as-promised';
// import httpStatus from 'http-status';
// import chai from 'chai';
// import joiAssert from 'joi-assert';
//
// import app from '../../../../index';
// import data from './data.media';
// import response from './response.media';
//
// chai.config.includeStack = true;
//
// describe('## [contract] mediaS APIs (OK tests)', () => {
//   describe('# GET /api/medias/recent', () => {
//     it('should return the recently added medias', (done) => {
//       request(app)
//         .get('/api/medias/recent')
//         .set('testing', data.common.token.testing)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           joiAssert(res.body, response.medias.recent);
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/medias/complete/{term}', () => {
//     it('should return the medias related with the searched term', (done) => {
//       request(app)
//         .get('/api/medias/complete/a')
//         .set('testing', data.common.token.testing)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           joiAssert(res.body, response.medias.complete);
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/medias/featured', () => {
//     it('should return the featured medias', (done) => {
//       request(app)
//         .get('/api/medias/featured')
//         .set('testing', data.common.token.testing)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           joiAssert(res.body, response.medias.featured);
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/medias/{media-id}/about', () => {
//     it('should return the featured medias', (done) => {
//       request(app)
//         .get(`/api/medias/${data.media.valid.id}/about`)
//         .set('testing', data.common.token.testing)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           joiAssert(res.body, response.medias.about);
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/medias/{media-id}/medias', () => {
//     it('should return media media', (done) => {
//       request(app)
//         .get(`/api/medias/${data.media.valid.id}/medias`)
//         .set('testing', data.common.token.testing)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           joiAssert(res.body, response.medias.medias);
//           done();
//         })
//         .catch(done);
//     });
//   });
// });
"use strict";
//# sourceMappingURL=OK.media.test.js.map
