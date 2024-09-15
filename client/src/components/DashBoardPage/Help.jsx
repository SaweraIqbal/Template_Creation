import React from "react";
import helpSection from '../../assets/helpSection.webp';
const HelpPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">How We Can Help?</h1>
        <p className="mt-4 text-lg">Find solutions or learn new tips quickly.</p>
        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search for help..."
            className="px-4 py-2 w-1/2 rounded-md text-orange-500 focus:outline-none"
          />
          <button className="ml-2 px-4 py-2 bg-white text-orange-600 font-semibold rounded-md hover:bg-blue-100">
            Search
          </button>
        </div>
      </section>

      {/* Section: New to TemplaTrove */}
      <div className="px-5 py-5">
        <h2 className="text-2xl font-semibold">New to TemplaTrove?</h2>
      </div>

      {/* Inline Divs with Background Images */}
      <div className="flex justify-center space-x-8 py-4">
        {/* Div 1: Get Started */}
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/4 text-center"
          style={{
            backgroundImage: `url(${helpSection})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Get Started with New</h3>
            <p className="text-white">Find guides to begin your journey.</p>
          </div>
        </div>

        {/* Div 2: Video Tutorials */}
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/4 text-center"
          style={{
            backgroundImage: `url(${helpSection})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
            <p className="text-white">Watch video tutorials to learn faster.</p>
          </div>
        </div>

        {/* Div 3: See Achievements */}
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/4 text-center"
          style={{
            backgroundImage: `url(${helpSection})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">See Achievements</h3>
            <p className="text-white">Discover milestones and accomplishments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
