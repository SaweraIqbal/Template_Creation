import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditMode, updateFAQ } from "../../store/slices/faqSlice"; // Redux actions
import useDownloadImage from "../customHook/useDownloadImage";

const FAQs = () => {
  const dispatch = useDispatch();
  const { faqs, isEditing } = useSelector((state) => state.faq); // Get state from Redux
  const [localFaqs, setLocalFaqs] = useState(structuredClone(faqs)); // Use a deep clone to avoid mutations
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently expanded FAQ
  const downloadImage = useDownloadImage();

  const handleDownloadClick = () => {
    downloadImage('.download-container ', 'Contact.png');
  };
  const handleEditChange = (index, field, value) => {
    const updatedFaqs = structuredClone(localFaqs); // Deep copy the state
    updatedFaqs[index][field] = value; // Modify the value safely
    setLocalFaqs(updatedFaqs); // Update the local state
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle expanded/collapsed state
  };

  const saveFAQChanges = () => {
    localFaqs.forEach((faq, index) => {
      dispatch(
        updateFAQ({ index, question: faq.question, answer: faq.answer })
      );
    });
    dispatch(toggleEditMode()); // Exit edit mode
  };

  return (
    <>
      <div>
        <div className="download-container flex flex-col items-center justify-center p-2 bg-pink-100 mt-3">
          <h1 className="text-[20px] font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-full max-w-4xl bg-zinc-100 shadow-md rounded-md">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  onClick={() => toggleAnswer(index)} // Toggle the answer on click
                  className="w-full px-4 py-3 text-left flex items-center justify-between bg-pink-200 hover:bg-pink-300 focus:outline-none"
                >
                  {isEditing ? (
                    <input
                      type="text"
                      value={localFaqs[index].question}
                      onChange={(e) =>
                        handleEditChange(index, "question", e.target.value)
                      }
                      className="w-full text-lg font-sm p-1 bg-pink-200"
                    />
                  ) : (
                    <span className="text-lg font-sm">{faq.question}</span>
                  )}
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-2">
                    {isEditing ? (
                      <textarea
                        value={localFaqs[index].answer}
                        onChange={(e) =>
                          handleEditChange(index, "answer", e.target.value)
                        }
                        className="w-full p-1 bg-pink-200"
                      />
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {isEditing ? (
          <>
            <button
              onClick={saveFAQChanges}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Save Changes
            </button>
            <div className="flex justify-end ">
              <button onClick={handleDownloadClick}>Download</button>
            </div>
          </>
        ) : (
          <button
            onClick={() => dispatch(toggleEditMode())}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Edit FAQs
          </button>
        )}
      </div>
    </>
  );
};

export default FAQs;
