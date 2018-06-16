'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _me = require('../requests/me.request');

var _me2 = _interopRequireDefault(_me);

var _me3 = require('../controllers/me.controller');

var _me4 = _interopRequireDefault(_me3);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/').post((0, _expressValidation2.default)(_me2.default.post), _me4.default.post);

router.route('/notifications').get(_authenticate2.default, _me4.default.getNotifications);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=me.route.js.map
