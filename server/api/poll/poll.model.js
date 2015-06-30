'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  options: Object,
  totalAnswers: Number
});

module.exports = mongoose.model('Poll', PollSchema);