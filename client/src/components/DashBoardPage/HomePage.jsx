import React from "react";
import homeImage1 from '../../assets/homeImage1.jpg';
import homeImage2 from '../../assets/homeImage2.png';
import homeImage3 from '../../assets/homeImage3.jpg';
import homeImage4 from '../../assets/homeImage4.jpg';
import homeImage5 from '../../assets/homeImage5.jpg';
import homeImage6 from '../../assets/homeImage6.jpg';
import homeImage7 from '../../assets/homeImage7.png';
import homeImage8 from '../../assets/homeImage8.jpg';
import homeImage9 from '../../assets/homeImage9.jpg';
import homeImage10 from '../../assets/homeImage10.png';
import backgroundVideo from '../../assets/backgroundVideo.mp4';

const templates = [
  { image: homeImage1, name: "Home", route: "home" },
  { image: homeImage2, name: "Landing", route: "landing" },
  { image: homeImage3, name: "About us", route: "about" },
  { image: homeImage4, name: "FAQS", route: "faqs" },
  { image: homeImage5, name: "Services", route: "services" },
  { image: homeImage6, name: "Terms & Conditions", route: "terms" },
  { image: homeImage7, name: "Portfolio", route: "portfolio" },
  { image: homeImage8, name: "Setting", route: "setting" },
  { image: homeImage9, name: "Dashboard", route: "dashboard" },
  { image: homeImage10, name: "Contact us", route: "contact" },
];

const Home = () => {
  // const navigate = useNavigate(); // Hook to navigate to other routes

  // const handleTemplateClick = (route) => {
  //   navigate(`/dashboard/${route}`); // Navigate to the template page
  // };

  return (
    <div className="px-5 mt-5">
      {/* Background Video */}
      <video
       className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Left Side Text */}
      <div className="pr-5">
        <h2 className="text-2xl text-orange-400 font-semibold mb-4">You might want to try...</h2>
      </div>

      {/* Template List */}
      <div className="w-[100%] grid grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer"
            // onClick={() => handleTemplateClick(template.route)} // Navigate on click
          >
          <a href="/dashboard/content">  <img
              src={template.image}
              alt={template.name}
              className="w-full h-40 object-cover rounded-md transition-transform duration-300 hover:scale-105"
            /></a>
            <p className="mt-2 text-sm font-medium">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
