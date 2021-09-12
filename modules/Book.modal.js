'use strict';
const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String },
    email: { type: String }

  });
  

  const bookmodel = mongoose.model('bookschema', bookschema);

module.exports = bookmodel;