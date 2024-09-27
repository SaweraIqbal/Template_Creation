const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  user_id : {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  reviewRate: {
    type: Number,
    required: [true, 'Review rating is required'],
  },
  reviewText: {
    type: String,
    required: [true, 'Review text is required'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);
