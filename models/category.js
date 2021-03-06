/**
 * Create a category model
 */
const mongoose = require('mongoose')

// schema
const Schema = mongoose.Schema
const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: null
  }
})

module.exports = mongoose.model('Category', categorySchema)
