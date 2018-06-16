'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _me = require('./me.route');

var _me2 = _interopRequireDefault(_me);

var _threads = require('./threads.route');

var _threads2 = _interopRequireDefault(_threads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', function (req, res) {
  return res.send('OK');
});

router.use('/me', _me2.default);

router.use('/threads', _threads2.default);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=index.route.js.map
