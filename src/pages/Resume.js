import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Education from "../components/Education";
import ExperienceComp from "../components/ExperienceComp";
import ProjectExperience from "../components/ProjectExperience";

import "../styles/resume.css";
import ResumeSkill from "../components/ResumeSkill";

export default function Resume() {
  const [data, setData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setData(location.state);
    setEditedData(location.state);
  }, [location.state]);

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleProfileChange = (field, value) => {
    setEditedData((prev) => {
      const newData = { ...prev };

      newData[field] = value;
      return newData;
    });
  };

  const handleInputChange = (field, value, sectionIndex, dataIndex) => {
    setEditedData((prev) => {
      const newData = { ...prev };
      newData[sectionIndex][dataIndex][field] = value;
      return newData;
    });
  };

  const saveChanges = () => {
    fetch(`/api/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Successfully updated:", res);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });

    console.log(editedData);
    setData(editedData);
    setIsEditing(false);
  };

  return (
    <div className="resume-container">
      <div className="profile-data-container">
        <div className="profile-data flexC">
          {isEditing ? (
            <>
              <input
                style={{ color: "black" }}
                type="text"
                placeholder="Name"
                value={editedData?.name}
                onChange={(e) => handleProfileChange("name", e.target.value)}
              />
              <input
                style={{ color: "black" }}
                type="text"
                placeholder="Current Designation"
                value={editedData?.currDesignation}
                onChange={(e) =>
                  handleProfileChange("currDesignation", e.target.value)
                }
              />
              <input
                style={{ color: "black" }}
                type="text"
                placeholder="Location"
                value={editedData?.location}
                onChange={(e) =>
                  handleProfileChange("location", e.target.value)
                }
              />
              <input
                style={{ color: "black" }}
                type="text"
                placeholder="Email"
                value={editedData?.email}
                onChange={(e) => handleProfileChange("email", e.target.value)}
              />
              <input
                style={{ color: "black" }}
                type="text"
                placeholder="Phone"
                value={editedData?.phone}
                onChange={(e) => handleProfileChange("phone", e.target.value)}
              />
              {/* Add input fields for other profile data */}
            </>
          ) : (
            <>
              <h1>{data?.name}</h1>
              <h2>{data?.currDesignation}</h2>
              <p>{data?.location}</p>
              <p>{data?.email}</p>
              <p>{data?.phone}</p>
            </>
          )}
        </div>
      </div>

      <div className="about-me-container">
        <h1>About Me:</h1>
        {isEditing ? (
          <textarea
            className="about-editInput"
            placeholder="Enter your about me text"
            value={editedData?.aboutMe}
            onChange={(e) => handleProfileChange("aboutMe", e.target.value)}
          />
        ) : (
          <p>{data?.aboutMe}</p>
        )}
      </div>

      <div className="edu-container">
        <Education
          data={isEditing ? editedData?.academics : data?.academics}
          isEditing={isEditing}
          handleInputChange={(field, value, dataIndex) =>
            handleInputChange(field, value, "academics", dataIndex)
          }
        />
      </div>

      <div className="exp-container">
        <ExperienceComp
          data={isEditing ? editedData?.experience : data?.experience}
          isEditing={isEditing}
          handleInputChange={(field, value, dataIndex) =>
            handleInputChange(field, value, "experience", dataIndex)
          }
        />
      </div>

      <div className="projects-container">
        <ProjectExperience
          data={isEditing ? editedData?.projects : data?.projects}
          isEditing={isEditing}
          handleInputChange={(field, value, dataIndex) =>
            handleInputChange(field, value, "projects", dataIndex)
          }
        />
      </div>

      <div className="projects-container">
        <ResumeSkill
          data={isEditing ? editedData?.skills : data?.skills}
          isEditing={isEditing}
          handleInputChange={(field, value, dataIndex) =>
            handleInputChange(field, value, "skills", dataIndex)
          }
        />
      </div>
      {isEditing ? (
        <div className="flex save">
          <button onClick={saveChanges}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <button className="edit" onClick={toggleEditMode}>
          Edit
        </button>
      )}
      <button className="resume-back" onClick={() => navigate("/home")}>
        Back
      </button>
    </div>
  );
}
