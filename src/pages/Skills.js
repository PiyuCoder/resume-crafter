import React, { useState } from "react";
import { useResumeContext } from "../context";
import { useNavigate } from "react-router-dom";
import SkillComp from "../components/SkillComp";
import "../styles/skills.css";
import tick from "../images/done.png";

export default function Skills() {
  const { handleSkillSubmit } = useResumeContext();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [iterator, setIterator] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  console.log(data);

  const handleSubmit = () => {
    const skillData = {
      skills: data,
    };
    setIsSaving(true);
    handleSkillSubmit(skillData);
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const addSkills = () => {
    setIterator([...iterator, { id: Date.now() }]);
  };

  const removeSkill = (id) => {
    setIterator((prev) => prev.filter((eId) => eId.id !== id));
  };

  return (
    <div className="skill-main flexC">
      <h1>Add Professional Skills</h1>
      {iterator.map((iterm) => (
        <SkillComp
          key={iterm.id}
          id={iterm.id}
          setData={setData}
          removeSkill={removeSkill}
        />
      ))}

      <button className="nxt" onClick={handleSubmit}>
        Finish
      </button>
      <div className="profile-back-btn">
        <button onClick={() => navigate("/projects")} type="submit">
          Back
        </button>
      </div>
      <button className="add" onClick={addSkills}>
        +
      </button>
      <label> Add Skills</label>
      {isSaving ? (
        <div className="save-screen">
          <div className="save-modal flexC">
            <h2>Your resume has been created!</h2>
            <p>Redirecting to the home page.</p>
            <img src={tick} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
