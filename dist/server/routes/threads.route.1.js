'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _threads = require('../requests/threads.request');

var _threads2 = _interopRequireDefault(_threads);

var _threads3 = require('../controllers/threads.controller');

var _threads4 = _interopRequireDefault(_threads3);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/').get((0, _expressValidation2.default)(_threads2.default.get), _threads4.default.get).post(_authenticate2.default, (0, _expressValidation2.default)(_threads2.default.post), _threads4.default.create);

router.use('/:threadsID').get((0, _expressValidation2.default)(_threads2.default.getOne), _threads4.default.getOne);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=threads.route.1.js.map
