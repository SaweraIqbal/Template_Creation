import { useState } from "react";
import {
  Home,
  LayoutDashboard,
  StickyNote,
  Table,
  Flag,
  Settings,
  LifeBuoy,
} from "lucide-react"; // Assuming these icons are imported
import HomePage from "./HomePage";
import ContentSection from "./ContentSection";
import Setting from './Setting'
import Help from './Help'
import Projects from "./Projects";
const Sidebar = () => {
  const [activePage, setActivePage] = useState("Home"); // State to track active page

  const sidebarItems = [
    { icon: <Home size={20} />, text: "Home", page: "Home" },
    {
      icon: <LayoutDashboard size={20} />,
      text: "Dashboard",
      page: "Dashboard",
    },
    { icon: <StickyNote size={20} />, text: "Projects", page: "Projects" },
    {
      icon: <Table size={20} />,
      text: "Templates",
      page: "Templates",
      alert: true,
    },
    { icon: <Flag size={20} />, text: "Reporting", page: "Reporting" },
    { icon: <Settings size={20} />, text: "Settings", page: "Settings" },
    { icon: <LifeBuoy size={20} />, text: "Help", page: "Help" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-slate-600">
        <nav className="h-full flex flex-col border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <div className="flex items-center justify-center leading-4">
              <h4 className="font-semibold text-center text-white">Menu</h4>
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
                onClick={() => setActivePage(item.page)} // Update active page on click
              />
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="">
        {activePage === "Home" && <HomePage />}
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Projects" && <Projects />}
        {activePage === "Templates" && <ContentSection />}
        {activePage === "Reporting" && <Reporting />}
        {activePage === "Settings" && <Setting />}
        {activePage === "Help" && <Help />}
      </div>
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
      onClick={onClick} // Trigger the page change on click
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
        <div className="absolute right-2 w-2 h-2 rounded-full bg-red-600"></div>
      )}
    </li>
  );
};

const DashboardPage = () => <div>This is the Dashboard</div>;
const ProjectsPage = () => <div>Your Projects List</div>;
const TemplatesPage = () => <div>Templates available here</div>;
const ReportingPage = () => <div>Reporting Tools</div>;
const SettingsPage = () => <div>Change your Settings</div>;
const HelpPage = () => <div>Help Center</div>;

export default Sidebar;
