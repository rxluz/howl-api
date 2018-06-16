'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = {
  valid: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWU1MjBkZTI1MDYzMTFkODhmNjYwZmMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA4MTg4MzgyfQ.JxPYLEF5JP7wPh_qOUluVIU893n4XabO2umvkFrg93g',
  invalid: 'invalid_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWRlNzNlYjcyYTA5MjljZjE5Yzg2MzgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA3NzUwODkxfQ.8IE8O2OC2E0WCGmziXh5JtnQMQ9b6NEVVvRa71oWgJE_invalid',
  testing: _config2.default.testingKey
};

exports.default = { token: token };
module.exports = exports['default'];
//# sourceMappingURL=data.common.js.map
