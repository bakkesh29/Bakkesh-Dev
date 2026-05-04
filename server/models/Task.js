const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'done'],
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);