const asyncHandler = require('express-async-handler');
const Review = require('../models/reviewModel');

const createReview = asyncHandler(async (req, res) => {
    const { reviewRate, reviewText } = req.body;
  
    // Check if all fields are provided
    if (!reviewRate || !reviewText) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
  
    const newReview = new Review({
      user_id: req.user.id, // Storing the user_id
      email: req.user.email, // Storing the email from the JWT token
      reviewRate,
      reviewText,
    });
  
    await newReview.save();
    res.status(201).json(newReview);
  });
  

// Get all reviews  /api/reviews/:id
const getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json(reviews);
});

const getUserReviews = asyncHandler(async (req, res) => {
    console.log('User Email:', req.user.email); // Check if the email is correct
  
    const reviews = await Review.find({ email: req.user.email });
  
    if (reviews.length > 0) {
      console.log('Reviews found:', reviews);
    } else {
      console.log('No reviews found for this user.');
    }
  
    res.status(200).json(reviews);
  });
  

  // Deleting the review 
  const deleteReview = asyncHandler(async (req, res) => {
    const review = await Review.findById(req.params.id);
  
    if (!review) {
      res.status(404);
      throw new Error('Review not found');
    }
  
    await review.deleteOne(); // Use deleteOne instead of remove
    res.status(200).json({ message: 'Review deleted' });
  });
  
  
module.exports = {
  createReview,
  getAllReviews,
  getUserReviews,
  deleteReview,
};
