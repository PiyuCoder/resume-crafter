import React from "react";
import "../styles/landingPage.css";
import { Link } from "react-router-dom";
import image from "../images/image.jpg";
import logo from "../images/clean-logo.png";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <img className="logo" src={logo} />
        <h1>Build Your Resume</h1>
        <p>Create a professional resume with ease</p>
        <div className="flexC">
          <Link to="/profile" className="start-button">
            Build Resume
          </Link>
          <Link
            to="/home"
            style={{ backgroundColor: "black" }}
            className="start-button"
          >
            Saved Resumes
          </Link>
        </div>
      </div>
      <img className="side-img" src={image} />
    </div>
  );
}
