const express = require('express');
const { createReview, getAllReviews, deleteReview, getUserReviews } = require('../controllers/reviewController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

// Review routes
router.post('/create', validateToken, createReview);
router.get('/user-reviews',validateToken, getUserReviews); // Show only the logged-in user's reviews
router.get('/all-reviews', getAllReviews); // Show all reviews (public or admin endpoint)
router.delete('/:id',validateToken, deleteReview);

module.exports = router;
