import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../context";
import ProjectComp from "../components/ProjectComp";
import "../styles/project.css";

export default function Projects() {
  const { handleProjectSubmit } = useResumeContext();
  const [data, setData] = useState([]);
  const [countArr, setCountArr] = useState([]);
  const navigate = useNavigate();

  console.log(data);
  const handleSubmit = () => {
    const projectData = {
      projects: data,
    };

    handleProjectSubmit(projectData);
    navigate("/skills");
  };

  const addProject = () => {
    setCountArr([...countArr, { id: Date.now() }]);
  };

  const removeProject = (id) => {
    setCountArr((prev) => prev.filter((qId) => qId.id !== id));
  };

  return (
    <div className="project-main flexC">
      <h1>Add Your Projects</h1>
      {countArr.map((project) => (
        <ProjectComp
          key={project.id}
          id={project.id}
          setData={setData}
          removeProject={removeProject}
        />
      ))}

      <button className="nxt" onClick={handleSubmit}>
        Next
      </button>
      <div className="profile-back-btn">
        <button onClick={() => navigate("/experience")} type="submit">
          Back
        </button>
      </div>
      <button className="add" onClick={addProject}>
        +
      </button>
      <label style={{ color: "rgb(111, 111, 111)", fontSize: "1.3rem" }}>
        Add Project
      </label>
    </div>
  );
}
