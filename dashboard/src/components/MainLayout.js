import React from "react";
import TopBar from "./TopBar";

const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <TopBar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default MainLayout;
