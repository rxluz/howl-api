'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mailgunJs = require('mailgun-js');

var _mailgunJs2 = _interopRequireDefault(_mailgunJs);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
// function login(req, res, next) {
function login(req, res) {
  _user2.default.findByCredentials(req.body.nickname, req.body.password).then(function (user) {
    return user.generateAuthToken().then(function (token) {
      return res.header('x-auth', token).send({ token: token, user: user });
    });
  }).catch(function () {
    return res.status(401).send();
  });
}

/**
 * Delete the user token
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function logout(req, res) {
  _user2.default.removeByToken(req.token).then(function (u) {
    return res.status(200).send(u);
  }).catch(function () {
    return res.status(400).send();
  });
}

/**
 * Send to user email a code to recover the password
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverRequest(req, res) {
  var mg = (0, _mailgunJs2.default)({ apiKey: _config2.default.mailgun.secret, domain: _config2.default.mailgun.domain });
  var recoverEmailTemplate = _fs2.default.readFileSync('server/views/emails/auth.recover.request.html', 'utf-8');
  var template = _handlebars2.default.compile(recoverEmailTemplate);

  _user2.default.generateRecoverToken(req.body.email).then(function (token) {
    var data = {
      from: 'Infestus Team <hello@appock.co>',
      to: req.body.email,
      subject: 'Utilize ' + token + ' para restaurar sua senha no Infestus',
      html: template({ token: token })
    };

    mg.messages().send(data, function (error) {
      if (error) return res.status(400).send(error);

      return res.status(200).send();
    });
  }).catch(function () {
    res.status(401).send();
  });
}

/**
 * Check the code, if the code is right generates a valid jwt to user
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverRestore(req, res) {
  _user2.default.setRecoverPassword(req.params.code, req.body.email, req.body.password).then(function (token) {
    return res.header('x-auth', token).status(200).send({ token: token });
  }).catch(function () {
    return res.status(401).send();
  });
}

/**
 * Check the code
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverCheck(req, res) {
  _user2.default.checkRecoverToken(req.params.code, req.body.email).then(function () {
    res.status(200).send();
  }).catch(function () {
    res.status(401).send();
  });
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

exports.default = { login: login, logout: logout, getRandomNumber: getRandomNumber, recoverRequest: recoverRequest, recoverRestore: recoverRestore, recoverCheck: recoverCheck };
module.exports = exports['default'];
//# sourceMappingURL=auth.controller.js.map
