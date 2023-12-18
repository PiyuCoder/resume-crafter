import React, { useEffect, useState } from "react";
import "../styles/experience.css";

export default function WorkExperience({ setData, id, removeExp }) {
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [skills, setSkills] = useState("");

  const workData = {
    company,
    designation,
    responsibilities,
    skills,
  };
  useEffect(() => {
    setData((prev) => {
      if (
        prev === undefined &&
        company &&
        designation &&
        responsibilities &&
        skills
      ) {
        return [workData];
      } else if (company && designation && responsibilities && skills) {
        const exist = prev.find((item) => item.id === id);

        return exist
          ? prev.map((item) =>
              item.id === id ? { ...item, ...workData } : item
            )
          : [...prev, { ...workData, id }];
      } else {
        return prev;
      }
    });
  }, [id, company, designation, responsibilities, skills]);

  return (
    <div className="expe-container">
      <div className="expe-company-div">
        <div className="label">
          <label>Company:</label>
        </div>
        <div className="input">
          <input
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <div className="expe-desig-div ">
        <div className="label">
          <label>Designation:</label>
        </div>
        <div className="input">
          <input
            placeholder="eg. Software Engineer"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
      </div>

      <div className="expe-respon-div ">
        <div className="label">
          <label>Responsibilities:</label>
        </div>
        <div className="input">
          <textarea
            style={{ height: "10vh" }}
            placeholder="eg. 1. Developed SPAs..."
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
          />
        </div>
      </div>

      <div className="expe-skill-div ">
        <div className="label">
          <label>Skills:</label>
        </div>
        <div className="input">
          <input
            placeholder="eg. JavaScript, HTML, CSS..."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
      </div>
      <button onClick={() => removeExp(id)}>X</button>
    </div>
  );
}
