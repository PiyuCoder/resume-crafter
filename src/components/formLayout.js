import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

export default function FormLayout() {
  const steps = [
    { path: "/profile", label: "Profile Details" },
    { path: "/about_me", label: "About Me" },
    { path: "/academics", label: "Education Details" },
    { path: "/experience", label: "Work Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div className="side-container">
        <Sidebar steps={steps} />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
