import React, { useState } from "react";
import ReactStars from "react-stars";

const Reporting = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleSubmit = () => {
    if (review.length < 10) {
      alert("Review should be at least 10 characters long.");
      return;
    }
    
    const newReview = { rating, review };
    setSubmittedReviews([...submittedReviews, newReview]); // Add the new review to the array
    setRating(0);  // Reset rating after submission
    setReview("");  // Clear review input after submission
    onSubmit(newReview);
  };

  return (
    <div className="flex justify-between space-x-10 p-5  ">
  
      <div className="rating-form py-5 flex flex-col items-center w-[50%]">
        <h2 className="font-bold text-orange-400 text-xl mb-4">Rate Us</h2>
        <ReactStars
          count={5}
          onChange={(newRating) => setRating(newRating)}
          size={50}
          value={rating} // Reset to 0 after submission
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

      {/* Submitted Reviews  */}
      <div className="submitted-reviews w-[50%]">
        <h3 className="font-bold text-lg mb-4">Submitted Reviews</h3>
        <div className="reviews-list space-y-4">
          {submittedReviews.length > 0 ? (
            submittedReviews.map((review, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-md "
              >
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={30}
                  edit={false}
                  color2={"#ffd700"}
                />
                <p className="mt-2 text-gray-700">{review.review}</p>
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
