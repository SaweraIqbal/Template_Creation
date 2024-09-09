import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Flag, Home, LayoutDashboard, LifeBuoyIcon, Settings, StickyNote, Table } from 'lucide-react';
import ContentSection from './ContentSection';
import TemplatePreview from './TemplatePreview'; // New component for image preview

const MainDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null); // State to handle selected template

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template); // Set the selected template when clicked
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
      <Sidebar/>
          {/* <ContentSection /> */}
      </div>
    </>
  );
};

export default MainDashboard;
