import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResumeContext } from "../context";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";
import Resume from "./Resume";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  const { handleProfileSubmit } = useResumeContext();
  const [name, setName] = useState("");
  const [currDesignation, setCurrDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = uuidv4();

    const profileData = {
      id,
      name,
      currDesignation,
      location,
      email,
      phone,
    };

    handleProfileSubmit(profileData);
    navigate("/about_me");
  };

  return (
    <div className="profile-page flexC">
      <h1>Enter Your Personal Details</h1>
      <form className="profile-page-form" onSubmit={handleSubmit}>
        <div className="name-input flexV">
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="desig-input flexV">
          <label>Current Designation</label>
          <input
            placeholder="eg. Software Engineer"
            value={currDesignation}
            onChange={(e) => setCurrDesignation(e.target.value)}
          />
        </div>

        <div className="email-input flexV">
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="phone-input flexV">
          <label>Phone number</label>
          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="location-input flexV">
          <label>Current location</label>
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="profile-btn">
          <button type="submit">Next</button>
        </div>
        <div className="profile-back-btn">
          <button onClick={() => navigate("/home")} type="submit">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
