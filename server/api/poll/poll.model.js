'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: String,
  user: String,
  active: Boolean,
  choices: Object,
  voters: Array
});

module.exports = mongoose.model('Poll', PollSchema);