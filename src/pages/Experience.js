import React, { useState } from "react";
import { useResumeContext } from "../context";
import { useNavigate } from "react-router-dom";
import WorkExperience from "../components/WorkExperience";

export default function Experience() {
  const { handleWorkExperienceSubmit } = useResumeContext();
  const [data, setData] = useState([]);
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();

  console.log(data);

  const handleSubmit = () => {
    const expData = {
      experience: data,
    };

    handleWorkExperienceSubmit(expData);
    navigate("/projects");
  };

  const addExperience = () => {
    setWorks([...works, { id: Date.now() }]);
  };

  const removeExp = (id) => {
    setWorks((prev) => prev.filter((eId) => eId.id !== id));
  };

  return (
    <div className="expe-main flexC">
      <h1>Add Professional Experience</h1>
      {works.map((work) => (
        <WorkExperience
          key={work.id}
          setData={setData}
          id={work.id}
          removeExp={removeExp}
        />
      ))}

      <div>
        <button className="nxt" onClick={handleSubmit}>
          Next
        </button>
      </div>

      <div className="profile-back-btn">
        <button onClick={() => navigate("/academics")} type="submit">
          Back
        </button>
      </div>

      <button className="add" onClick={addExperience}>
        +
      </button>
      <label style={{ color: "rgb(111, 111, 111)", fontSize: "1rem" }}>
        Add Experience
      </label>
    </div>
  );
}
