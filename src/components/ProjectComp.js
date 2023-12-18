import React, { useEffect, useState } from "react";

export default function ProjectComp({ setData, id, removeProject }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [durationTook, setDurationTook] = useState("");

  const projectData = {
    projectName,
    description,
    technologies,
    durationTook,
  };

  useEffect(() => {
    setData((prev) => {
      if (
        prev === undefined &&
        projectName &&
        description &&
        technologies &&
        durationTook
      ) {
        return [projectData];
      } else if (projectName && description && technologies && durationTook) {
        const exist = prev && prev.find((item) => item.id === id);

        return exist
          ? prev.map((item) =>
              item.id === id ? { ...item, ...projectData } : item
            )
          : [...prev, { ...projectData, id }];
      } else {
        return prev;
      }
    });
  }, [id, projectName, technologies, durationTook, description]);

  return (
    <div className="project-container">
      <div className="project-name-div">
        <label>Project</label>
        <input
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="project-tech-div">
        <label>Technologies</label>
        <input
          placeholder="Technologies used"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
      </div>

      <div className="project-desc-div">
        <label>Description</label>
        <textarea
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="project-duration-div">
        <label>Days took:</label>
        <input
          placeholder="Duration took"
          value={durationTook}
          onChange={(e) => setDurationTook(e.target.value)}
        />
      </div>
      <button onClick={() => removeProject(id)}>X</button>
    </div>
  );
}
