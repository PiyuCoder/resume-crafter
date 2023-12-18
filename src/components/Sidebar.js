import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = ({ steps }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        {steps.map((step, index) => (
          <div className="progres" key={index}>
            <div
              className={`dot ${currentPath === step.path ? "selected" : ""}`}
            >
              <h3>{index + 1}</h3>
            </div>
            <h2>{step.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
