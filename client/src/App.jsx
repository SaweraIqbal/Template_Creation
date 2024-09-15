import {
  BrowserRouter as Router,
 Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/LoginPages/Login";
import Register from "./components/LoginPages/Register";
import IndexPage from "./components/LandingPage/IndexPage";
import Reporting from "./components/DashBoardPage/Reporting";
import Projects from "./components/DashBoardPage/Projects";
import Setting from "./components/DashBoardPage/Setting";
import ContentSection from "./components/DashBoardPage/ContentSection";
import HelpPage from "./components/DashBoardPage/Help";
import Home from "./components/DashBoardPage/HomePage";
import Layout from "./components/DashBoardPage/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without layout */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Routes with layout */}
        <Route path="/dashboard/*" element={<Layout>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="reporting" element={<Reporting />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="setting" element={<Setting />} />
            <Route path="content" element={<ContentSection />} />
          </Routes>
        </Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import React from 'react'
// import MainDashboard from './components/DashBoardPage/MainDashboard'

// const App = () => {
//   return (
//     <>
//      <MainDashboard/>
//     </>
//   )
// }

// export default App
