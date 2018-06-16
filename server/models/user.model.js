import Promise from 'bluebird';
import mongoose from 'mongoose';
import _ from 'lodash';


/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
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
  },

});

UserSchema.methods.toJSON = function toJSON() {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'username', 'phone', 'createdAt']);
};

UserSchema.set('toJSON', { getters: true, virtuals: true });

UserSchema.methods.toObject = function toObject() {
  const userObject = this;

  return _.pick(userObject, ['_id', 'username', 'phone', 'createdAt']);
};


UserSchema.statics.findByUsername = function findByUsername(username) {
  const User = this;
  return User.findOne({ username, active: true }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return user;
  });
};




/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
