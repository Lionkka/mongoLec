const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/postman');

module.exports = mongoose;
