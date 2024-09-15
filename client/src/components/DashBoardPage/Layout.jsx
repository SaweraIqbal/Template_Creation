import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="flex w-full pt-16">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 ml-20 overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
