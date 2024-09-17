import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Service Hours", answer: "Our service hours are Mon – Fri 10 am – 8 pm, Sat, Sun Closed." },
    { question: "Shipping and Handling", answer: "We offer standard and expedited shipping options. Handling time is typically 1-2 business days." },
    { question: "Product Details", answer: "All product details are available on the respective product pages, including specifications and features." },
    { question: "Return Policies", answer: "Returns are accepted within 30 days of purchase. Please refer to our return policy page for more details." },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-pink-100 mt-3">
      <h1 className="text-[20px] font-bold mb-4">Frequently Asked Questions</h1>
      <div className="w-full max-w-4xl bg-zinc-100 shadow-md rounded-md">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between bg-pink-200 hover:bg-pink-300 focus:outline-none"
            >
              <span className="text-lg font-sm">{faq.question}</span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
