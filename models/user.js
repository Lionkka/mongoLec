const mongoose = require('mongoose');

const { Schema } = mongoose;
const worksSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
  id: {
    type: Schema.Types.ObjectId,
    ref: 'Work',
  },
}, { _id: false });

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    trim: true,
    ref: 'Department',
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  works: {
    type: [worksSchema],
    trim: true,
  },
}, {
  toJSON: {
    virtuals: true,
    transform(doc, ret) {
      delete ret.password;
    },
  },
});

module.exports = mongoose.model('User', schema);
