const mongoose = require('mongoose');

const { Schema } = mongoose;

 function now () {
   return new Date()
 }

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
  date:{
    type: Date,
    default: now
  },
  country:{
    type: String,
    enam: ['Ukraine', 'Poland']
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
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
