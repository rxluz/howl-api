'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function post(req, res) {
  return res.json({
    id: 9,
    username: req.body.username,
    phone: req.body.phone
  });
}

function getNotifications(req, res) {
  var notifications = [{
    id: 1,
    content: 'lola commented in your thread',
    thread_id: 21
  }, {
    id: 2,
    content: 'rxluz voted in your thread',
    thread_id: 21
  }, {
    id: 3,
    content: 'rxluz commented in your thread',
    thread_id: 21
  }];
  return res.json({ total: notifications.length, data: notifications });
}

exports.default = {
  post: post,
  getNotifications: getNotifications
};
module.exports = exports['default'];
//# sourceMappingURL=me.controller.js.map
