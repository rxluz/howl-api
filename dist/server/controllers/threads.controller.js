'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function get(req, res) {
  return res.json({ hello: 'threadsJsonget' });
}

function getOne(req, res) {
  return res.json({ hello: 'threadsJsonGetOne' });
}

function setUpVote(req, res) {
  return res.json({ hello: 'threadsJsonsetUpVote' });
}

function setUpVoteComment(req, res) {
  return res.json({ hello: 'threadsJsonsetUpVoteComment' });
}

function setDownVote(req, res) {
  return res.json({ hello: 'threadsJsonsetDownVote' });
}

function setDownVoteComment(req, res) {
  return res.json({ hello: 'threadsJsonsetDownVoteComment' });
}

function post(req, res) {
  return res.json({ hello: 'threadsJsonpost' });
}

exports.default = {
  get: get,
  getOne: getOne,
  setUpVote: setUpVote,
  setUpVoteComment: setUpVoteComment,
  setDownVote: setDownVote,
  setDownVoteComment: setDownVoteComment,
  post: post
};
module.exports = exports['default'];
//# sourceMappingURL=threads.controller.js.map
