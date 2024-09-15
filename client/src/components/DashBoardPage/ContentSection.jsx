import React, { useState } from "react";
import ButtonList from "./ButtonList"; // Import ButtonList component
import TemplatePreview from "./TemplatePreview"; // Import TemplatePreview component

const ContentSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(""); // State to track selected template

  return (
    <div className="grid-1 bg-slate-400 h-screen flex flex-col items-center  py-5">
      {/* Divide the section into two parts */}
      <div className="flex w-full h-full p-0 space-x-8">
        {/* Left section - Buttons */}
        <ButtonList setSelectedTemplate={setSelectedTemplate} />

        {/* Right section - Template Preview */}
        <TemplatePreview selectedTemplate={selectedTemplate} />
      </div>
    </div>
  );
};

export default ContentSection;
