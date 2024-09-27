import React, { useState, useEffect } from "react";
import ReactStars2 from 'react-stars';
import axios from 'axios';
import { useSelector } from "react-redux";

const Reporting = () => {
  const { email } = useSelector((state) => state.user); // Get email from Redux
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [userReviews, setUserReviews] = useState([]); // Unified state for all reviews

  const API_URL = "http://localhost:5050/api/reviews";

  // Fetch user reviews on component mount
  useEffect(() => {
    fetchUserReviews();
  }, []);

  // Fetch and set user reviews
  const fetchUserReviews = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Get token from localStorage
      const response = await axios.get(`${API_URL}/user-reviews`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in request header
        },
      });
      setUserReviews(response.data); // Set fetched user reviews in state
    } catch (error) {
      console.error("Error fetching user reviews:", error);
    }
  };

  // Handle review submission
  const handleSubmit = async () => {
    if (review.length < 10) {
      alert("Review should be at least 10 characters long.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const newReview = { email, reviewRate: rating, reviewText: review };

      const response = await axios.post(`${API_URL}/create`, newReview, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in request header
        },
      });

      // Add the new review to both `userReviews` and reset the form
      setUserReviews([...userReviews, response.data]);
      setRating(0);
      setReview("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // Handle review deletion
  const handleDeleteReview = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in request header
        },
      });

      // Remove deleted review from `userReviews`
      setUserReviews(userReviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="flex justify-between space-x-10 p-5">
      {/* Rating Form */}
      <div className="rating-form py-5 flex flex-col items-center w-[50%]">
        <h2 className="font-bold text-orange-400 text-xl mb-4">Rate Us</h2>
        <ReactStars2
          count={5}
          onChange={(newRating) => setRating(newRating)}
          size={50}
          value={rating}
          color2={"#ffd700"}
          className="mb-4"
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          className="review-input w-3/4 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full mt-4 hover:bg-orange-600 transition-colors w-1/2"
        >
          Submit
        </button>
      </div>

      {/* User Reviews */}
      <div className="user-reviews w-[50%]">
        <h3 className="font-bold text-lg mb-4">Your Reviews</h3>
        <div className="reviews-list space-y-4">
          {userReviews.length > 0 ? (
            userReviews.map((review) => (
              <div key={review._id} className="p-4 border border-gray-300 rounded-md">
                <ReactStars2
                  count={5}
                  value={review.reviewRate}
                  size={30}
                  edit={false}
                  color2={"#ffd700"}
                />
                <p className="mt-2 text-gray-700">{review.reviewText}</p>
                {review.email && (
                  <p className="mt-1 text-sm text-gray-500">By: {review.email}</p>
                )}
                <button
                  onClick={() => handleDeleteReview(review._id)}
                  className="bg-red-500 text-white font-semibold py-1 px-2 rounded-full mt-2 hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No reviews submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reporting;
