const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
}).set('toJSON', {
  virtuals: true,
});
module.exports = mongoose.model('Department', schema);
