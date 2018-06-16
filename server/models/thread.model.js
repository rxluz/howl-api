import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    text: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  upVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  downVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
});

const ThreadSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    required: true
  },
  timer: {
    type: String,
    trim: true,
    text: true
  },
  comments: [CommentSchema],
  upVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  downVotes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ThreadSchema.statics.findByUser = function findByUser(owner) {
  const media = this;
  return media.find({ owner, active: true });
};

CommentSchema.virtual('isFlagged').get(function isFlagged() {
  if (!global.userID || !this.flags) return false;

  return (this
    .flags
    .filter(fl => fl.owner.toString() === global.userID.toString())
  ).length > 0;
});

ThreadSchema.set('toJSON', { getters: true, virtuals: true });
ThreadSchema.set('toObject', { getters: true, virtuals: true });

ThreadSchema.set('toJSON', { getters: true, virtuals: true });

ThreadSchema.set('toObject', { getters: true, virtuals: true });

export default mongoose.model('Thread', ThreadSchema);
