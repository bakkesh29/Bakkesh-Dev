const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['Certification', 'Award', 'Hackathon', 'Academic', 'Other'],
    default: 'Other'
  },
  date: {
    type: Date,
    required: true
  },
  issuer: String,
  credentialLink: String
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);