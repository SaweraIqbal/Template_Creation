import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/reviews/all-reviews'); // Adjust the URL as needed
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000); // Change the number to adjust the interval (in milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [reviews.length]);

  if (reviews.length === 0) return <p>Loading...</p>;

  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-3xl text-center my-10 lg:my-20 text-orange-400">
        What Our Users Are Saying
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex-shrink-0">
          <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
            <p>{reviews[currentIndex].reviewText}</p>
            <div className="flex mt-8 items-start">
              <h6>{reviews[currentIndex].email}</h6>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Rating: {reviews[currentIndex].reviewRate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4" style={{ flexWrap: 'wrap' }}>
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;