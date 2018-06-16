'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _feedback = require('../models/feedback.model');

var _feedback2 = _interopRequireDefault(_feedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Post the user feedback
 * @returns {*}
 */
function createFeedback(req, res) {
  var feedback = new _feedback2.default(_lodash2.default.pick(req.body, ['name', 'email', 'message']));

  return feedback.save().then(function () {
    return res.send();
  }).catch(function (e) {
    return res.send(e);
  });
}

exports.default = { createFeedback: createFeedback };
module.exports = exports['default'];
//# sourceMappingURL=other.controller.js.map
