import React, { useState } from "react";
import ProfileImage from "../../assets/ProfileImage.avif";
import useDownloadImage from "../customHook/useDownloadImage";

const ProfilePage = () => {
  const [name, setName] = useState("Angela Zafirovska");
  const [username, setUsername] = useState("angelazaff");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("Macedonia");
  const [website, setWebsite] = useState("");
  const downloadImage = useDownloadImage();

  const handleDownloadClick = () => {
    downloadImage('.download-container ', 'Setting.png');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the form data to an API or log it
    console.log({ name, username, email, location, website });
  };
  return (
    <>
    <div className="download-container flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-md p-4">
        <div className="text-center mb-8">
          {/* Profile Picture */}
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-full w-16 h-16 mx-auto mb-2"
          />
          {/* User Name */}
          <h2 className="font-bold text-[10px]">Angela Zafirovska</h2>
          <p className="text-gray-500 text-[8px]">@angelazaff</p>
        </div>

        {/* Sidebar Navigation */}
        <nav>
          <ul className="space-y-2 text-[8px]">
            <li className="text-pink-500 font-bold text-[14px]">Profile</li>
            <li>Work Opportunities</li>
            <hr />
            <li>Password</li>
            <hr />
            <li>Social Profiles</li>
            <hr />
            <li>Invitations</li>
            <hr />
            <li>Sessions</li>
            <hr />
            <li>Applications</li>
            <hr />
          </ul>
        </nav>
      </aside>

      {/* Profile Form */}
      <main className="flex-1 p-4">
        <div className="bg-white p-2 rounded-lg shadow-lg">
          <h2 className="text-[15px] font-bold mb-0">Profile</h2>

          {/* Profile Completion Indicator */}
          <div className="flex justify-end mb-0">
            <div className="relative text-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-500 text-[8px] font-bold">75%</span>
              </div>
              <span className=" text-gray-500 text-[8px]">Complete</span>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[12px] font-bold text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg text-[10px] text-white"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state when user types
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg text-[10px] text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update state
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded-lg text-[10px] text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg text-[10px] text-white"
                value={location}
                onChange={(e) => setLocation(e.target.value)} // Update state
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-gray-700">
                Website
              </label>
              <input
                type="url"
                className="w-full border border-gray-300 p-2 rounded-lg text-[10px] text-white"
                value={website}
                onChange={(e) => setWebsite(e.target.value)} // Update state
                placeholder="example.com"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-[12px] text-white p-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    <div className="flex justify-end text-black">
     <button onClick={handleDownloadClick}>Download</button>
     </div>
    </>
  );
};

export default ProfilePage;
