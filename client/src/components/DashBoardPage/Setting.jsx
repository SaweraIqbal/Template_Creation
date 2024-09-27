import { useSelector, useDispatch } from 'react-redux';
import { FaCamera } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { setUser } from '../../store/slices/userSlice';

const Setting = () => {
  const { username, email, profilePic, id } = useSelector((state) => state.user); // fetch data from redux store
  const [profileImage, setProfileImage] = useState(profilePic);
  const dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    // Check if file size exceeds 2MB
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      alert("File size exceeds 2MB, please choose a smaller file.");
      return;
    }
  
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const base64String = reader.result;
  
      axios.put(`http://localhost:5050/api/auth/${id}/pic`, {
        profilePic: base64String
      })
      .then(response => {
        console.log('Profile picture updated:', response.data.profilePic);
  
        // Update Redux state with the new profile picture URL
        dispatch(setUser({ username, email, id, profilePic: response.data.profilePic }));
        setProfileImage(response.data.profilePic); // Update local state to reflect changes immediately
      })
      .catch(error => {
        console.error('Error updating profile picture:', error);
      });
    };
  
    reader.readAsDataURL(file); // Convert image to base64
  };
  
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-8">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={profileImage} 
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

export default Setting;
