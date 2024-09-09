// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Login from "./components/LoginPages/Login";
// import Register from "./components/LoginPages/Register";
// import IndexPage from "./components/LandingPage/IndexPage";
// import sidepic from './assets/sidepic.jpg';

// const AppContent = () => {
//   const location = useLocation();
//   const showBackgroundImage = location.pathname === '/login' || location.pathname === '/register';

//   return (
//     <div>
//       {showBackgroundImage ? (
//         <div
//           className="text-white h-[100vh] flex justify-center items-center bg-cover"
//           style={{ backgroundImage: `url(${sidepic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
//         >
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//       ) : (
//         <Routes>
//           <Route path="/" element={<IndexPage />} />
//         </Routes>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;
import React from 'react'
import MainDashboard from './components/DashBoardPage/MainDashboard'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store'
import Header1 from './components/EditableHeders/Header1'

const App = () => {
  return (
    <>
    <MainDashboard/>
      {/* <Header1 /> */}
 
    </>
  )
}

export default App

