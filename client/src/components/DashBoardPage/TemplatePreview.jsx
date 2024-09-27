import React from "react";
import HomePage from "../Tempates/HomePage"; 
import LandingPage from "../Tempates/LandingPage";
import Dashboard from "../Tempates/Dashboard";
import Portfolio from "../Tempates/Portfolio";
import Setting from "../Tempates/Setting";
import Contact from "../Tempates/Contact";
import FAQs from "../Tempates/FAQs";

const TemplatePreview = ({ selectedTemplate }) => {
  // Function to render the selected template component
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "Home Page":
        return <HomePage />;
      case "Landing Page":
        return <LandingPage />;
      case "Dashboard Page":
        return <Dashboard />;
      case "Portfolio Page":
        return <Portfolio />;
      case "Setting Page":
        return <Setting />;
      case "FAQs Page":
        return <FAQs />;
      case "Contact-Us Page":
        return <Contact />;
      default:
        return <p className="justify-center">Select a template to preview</p>;
    }
  };

  return (
    <div className="w-1/2 bg-white rounded-lg shadow-lg p-5 mt-10">
        {/* <h2 className="text-lg font-semibold text-gray-800">Template Preview</h2> */}
      <div className="h-1/2 w-4/5 ml-10 text-black">{renderTemplate()}</div>
    </div>
  );
};

export default TemplatePreview;
