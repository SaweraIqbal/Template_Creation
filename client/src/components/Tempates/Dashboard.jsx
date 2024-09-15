import React from 'react';
import { Home, StickyNote, Table, Settings, Flag, LifeBuoy, User } from 'lucide-react'; // Icons
import logo from '../../assets/logo.png';
import image1Template2 from '../../assets/image1Template2.jpg';
import image2Template2 from '../../assets/image2Template2.png';
import image3Template2 from '../../assets/image3Template2.jpg';
import backgroundVideo from '../../assets/backgroundVideo.mp4'; // Example video

const Dashboard = () => {
  return (
    <div className=" bg-slate-400 flex flex-col my-5">
      {/* Header */}
      <header className="bg-gray-700 shadow-md flex w-full items-center justify-between h-14 px-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-6" />
          <span className='text-[15px] font-semibold pr-3 text-white'>Title</span>
          <input
            type="text"
            className="border rounded w-[50%] max-w-xs p-1 text-[15px]"
            placeholder="Search..."
          />
        </div>
        <div className="flex space-x-3">
          <button className="text-white text-[12px]">Login</button>
          <button className="text-white text-[12px]">Sign Up</button>
        </div>
      </header>

      {/* Main Section: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-16 bg-gray-800 flex flex-col items-center py-6 space-y-0">
          <SidebarItem icon={<Home size={14} />} tooltip="Home" />
          <SidebarItem icon={<StickyNote size={14} />} tooltip="Template" />
          <SidebarItem icon={<Table size={14} />} tooltip="Dashboard" />
          <SidebarItem icon={<Settings size={14} />} tooltip="Settings" />
          <SidebarItem icon={<Flag size={14} />} tooltip="Reporting" />
          <SidebarItem icon={<User size={14} />} tooltip="About Us" />
          <SidebarItem icon={<LifeBuoy size={14} />} tooltip="Contact Us" />
        </aside>

        {/* Content Section */}
        <section className="flex-1 ">
          {/* Hero Section */}
          <div className="bg-gray-200  text-center">
            <h2 className="text-[15px] font-bold mb-2 py-3">Welcome to Your Dashboard</h2>
            <p className="text-[12px] mb-2">Manage your projects and explore templates.</p>
            <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 text-[10px] mb-4">
              Try Now
            </button>
          </div>

          {/* Images/Video Section */}
          <div className="grid grid-cols-3 gap-4 py-4 ml-2 mr-2">
            {/* Image Cards */}
            <ImageCard media={image1Template2} description="Project 1" />
            <ImageCard media={image2Template2} description="Project 2" />
            <ImageCard media={image3Template2} description="Project 3" />
            <ImageCard media={image1Template2} description="Project 1" />
            <ImageCard media={image2Template2} description="Project 2" />
            <ImageCard media={image3Template2} description="Project 3" />
          </div>
        </section>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, tooltip }) => (
  <div className="relative group cursor-pointer">
    <div className="text-white p-3 hover:bg-gray-600 rounded-md">{icon}</div>
    <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100">
      {tooltip}
    </span>
  </div>
);

const ImageCard = ({ media, description }) => (
  <div className="relative group overflow-hidden">
    <img
      src={media}
      alt={description}
      className=" h-25 object-cover rounded transition-transform duration-300 group-hover:scale-105"
    />
    <div className="mt-2 text-sm text-center font-medium">{description}</div>
  </div>
);


export default Dashboard;
