import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaCamera } from 'react-icons/fa';

const ProfilePage = () => {
  const { username, email } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Show uploaded image
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-8">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={profileImage || 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'} // Default placeholder image if no image is uploaded
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-blue-500 text-black p-2 rounded-full cursor-pointer"
            >
              <FaCamera />
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => document.getElementById('imageUpload').click()}
          >
            Upload Image
          </button>
        </div>

        {/* User Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-2 text-black">{username}</h1>
          <p className="text-lg text-black">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
