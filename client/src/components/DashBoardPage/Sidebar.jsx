import React, { useState } from "react";
import {
  Home,
  StickyNote,
  Table,
  Flag,
  Settings,
} from "lucide-react"; // Icons
import { useNavigate } from "react-router-dom"; 
import { FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const [activePage, setActivePage] = useState("Home"); // State to track active page

  const sidebarItems = [
    { icon: <Home size={20} />, text: "Home", page: "home" },
    { icon: <StickyNote size={20} />, text: "Projects", page: "projects" },
    { icon: <Table size={20} />, text: "Templates", page: "content" },
    { icon: <Flag size={20} />, text: "Reporting", page: "reporting" },
    { icon: <Settings size={20} />, text: "Settings", page: "setting" },
    { icon: <FaQuestionCircle size={20} />, text: "Help", page: "help" },
  ];

  const handleNavigation = (page) => {
    setActivePage(page);
    navigate(`/dashboard/${page}`); // Use navigate to go to the respective page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-20 bg-slate-600 fixed top-16 h-[calc(100vh-4rem)]">
        <nav className="h-full flex flex-col border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <div className="flex items-center justify-center leading-4">
              <h4 className="font-semibold text-center text-white py-5">Menu</h4>
            </div>
          </div>
          <ul className="flex-1 px-3">
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                active={activePage === item.page}
                alert={item.alert}
                onClick={() => handleNavigation(item.page)} // Update to handle navigation
              />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

const SidebarItem = ({ icon, text, active, alert, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`relative flex items-center p-2 space-x-4 rounded-md cursor-pointer ${
        active ? "bg-orange-700" : "hover:bg-orange-400"
      } ${alert ? "text-red-500" : "text-white"}`}
      onMouseEnter={() => setIsHovered(true)} // Show text on hover
      onMouseLeave={() => setIsHovered(false)} // Hide text when not hovering
      onClick={onClick} // Trigger navigation on click
    >
      {icon}
      {/* Show text on hover */}
      <span
        className={`absolute left-full ml-3 whitespace-nowrap bg-slate-700 text-white px-2 py-1 rounded-md transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div className="absolute h-2 rounded-full bg-red-600"></div>
      )}
    </li>
  );
};

export default Sidebar;
