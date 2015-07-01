'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: String,
  user: String,
  info: String,
  active: Boolean,
  choices: Object,
  totalAnswers: Number
});

module.exports = mongoose.model('Poll', PollSchema);