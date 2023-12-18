import React, { useState } from "react";
import { useResumeContext } from "../context";
import { useNavigate } from "react-router-dom";
import "../styles/aboutMe.css";

export default function AboutMe() {
  const { handleAboutMeSubmit } = useResumeContext();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const aboutMeData = {
      aboutMe: data,
    };

    handleAboutMeSubmit(aboutMeData);
    navigate("/academics");
  };

  return (
    <div className="aboutme-container flexC">
      <h1>Write a Professional Summary</h1>
      <textarea
        placeholder="eg. Dedicated and results-oriented Project Manager with over 7 years of experience leading cross-functional..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={handleSubmit}>Next</button>
      <div className="profile-back-btn">
        <button onClick={() => navigate("/profile")} type="submit">
          Back
        </button>
      </div>
    </div>
  );
}
