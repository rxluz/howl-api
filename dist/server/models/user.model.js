'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * User Schema
 */
var UserSchema = new _mongoose2.default.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

UserSchema.methods.toJSON = function toJSON() {
  var user = this;
  var userObject = user.toObject();

  return _lodash2.default.pick(userObject, ['_id', 'username', 'phone', 'createdAt']);
};

UserSchema.set('toJSON', { getters: true, virtuals: true });

UserSchema.methods.toObject = function toObject() {
  var userObject = this;

  return _lodash2.default.pick(userObject, ['_id', 'username', 'phone', 'createdAt']);
};

UserSchema.statics.findByUsername = function findByUsername(username) {
  var User = this;
  return User.findOne({ username: username, active: true }).then(function (user) {
    if (!user) {
      return _bluebird2.default.reject();
    }

    return user;
  });
};

/**
 * @typedef User
 */
exports.default = _mongoose2.default.model('User', UserSchema);
module.exports = exports['default'];
//# sourceMappingURL=user.model.js.map
