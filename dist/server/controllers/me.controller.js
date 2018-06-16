'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function post(req, res) {
  return res.json({ hello: 'threadsJsonpost' });
}

function getNotifications(req, res) {
  return res.json({ hello: 'threadsJsongetNotifications' });
}

exports.default = {
  post: post,
  getNotifications: getNotifications
};
module.exports = exports['default'];
//# sourceMappingURL=me.controller.js.map
