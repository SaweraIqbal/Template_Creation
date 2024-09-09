import React, { useState } from "react";
import HomePage from "../Tempates/HomePage"; // Import your templates
const ContentSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(""); // State to track selected template

  // Function to render the selected template component
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "Home Page":
        return <HomePage />;
      case "Landing Page":
        return <HomePage />;
      case "Dashboard Page":
        return <HomePage />;
      case "Portfolio Page":
        return <HomePage />;
      case "Setting Page":
        return <HomePage />;
      case "FAQs Page":
        return <HomePage />;
      case "Contact-Us Page":
        return <HomePage />;
      case "Services Page":
        return <HomePage />;
      case "About-Us Page":
        return <HomePage />;
      default:
        return <p>Select a template to preview</p>;
    }
  };

  return (
    <div className="flex-1 bg-slate-400 h-full flex flex-col items-center w-screen">
      {/* Divide the section into two parts */}
      <div className="flex w-full h-full p-0 space-x-8 ">
        {/* Left section - Buttons */}
        <div className="w-1/3 flex flex-col items-center space-y-4 ">
          <h1 className="text-xl font-semibold text-center text-blue-900 mb-4">
            Customizable Templates
          </h1>
          
          {/* Buttons */}
          <button
            onClick={() => setSelectedTemplate("Home Page")}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors w-1/2"
          >
            Home Page
          </button>
          <button
            onClick={() => setSelectedTemplate("Landing Page")}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors w-1/2"
          >
            Landing Page
          </button>
          <button
            onClick={() => setSelectedTemplate("Dashboard Page")}
            className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition-colors w-1/2"
          >
            Dashboard Page
          </button>
          <button
            onClick={() => setSelectedTemplate("Portfolio Page")}
            className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition-colors w-1/2"
          >
            Portfolio Page
          </button>
          <button
            onClick={() => setSelectedTemplate("Setting Page")}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition-colors w-1/2"
          >
            Setting Page
          </button>
          <button
            onClick={() => setSelectedTemplate("FAQs Page")}
            className="bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition-colors w-1/2"
          >
            FAQs Page
          </button>
          <button
            onClick={() => setSelectedTemplate("Contact-Us Page")}
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition-colors w-1/2"
          >
            Contact-Us Page
          </button>
          <button
            onClick={() => setSelectedTemplate("Services Page")}
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors w-1/2"
          >
            Services Page
          </button>
          <button
            onClick={() => setSelectedTemplate("About-Us Page")}
            className="bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-600 transition-colors w-1/2"
          >
            About-Us Page
          </button>
        </div>

        {/* Right section - Template Preview */}
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-lg font-bold mb-2  mt-0 text-center text-gray-800">Template Preview</h2>
          <div className=" h-full text-gray-600">
            {/* Render the selected template */}
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
