
const Projects = () => {
  return (
    <div className="flex flex-col items-center py-5 h-screen">
      {/* Central Text */}
      <h1 className="text-2xl font-bold mb-4 mt-2">Templates Source Code here!</h1>

      {/* Templates List */}
      <div className="w-full max-w-md">
      
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors w-1/2 mb-3"
      >
        Home Page
      </button>
      <button
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors w-1/2 mb-3"
      >
        Landing Page
      </button>
      <button
        className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition-colors w-1/2 mb-3"
      >
        Dashboard Page
      </button>
      <button
        className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition-colors w-1/2"
      >
        Portfolio Page
      </button>
      <button
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition-colors w-1/2 mb-3"
      >
        Setting Page
      </button>
      <button
        className="bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition-colors w-1/2"
      >
        FAQs Page
      </button>
      <button
        className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition-colors w-1/2"
      >
        Contact-Us Page
      </button>
      </div>
    </div>
  );
};

export default Projects;
