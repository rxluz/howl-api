'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _threads = require('../controllers/threads.controller');

var _threads2 = _interopRequireDefault(_threads);

var _authenticate = require('../middlewares/authenticate.middleware');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/').get(_threads2.default.getOne);

router.route('/up').post(_authenticate2.default, _threads2.default.setUpVote);

router.route('/up/:commentID').post(_authenticate2.default, _threads2.default.setUpVoteComment);

router.route('/down').post(_authenticate2.default, _threads2.default.setDownVote);

router.route('/down/:commentID').post(_authenticate2.default, _threads2.default.setDownVoteComment);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=threads.id.route.js.map
