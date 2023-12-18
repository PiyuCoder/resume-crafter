import React from "react";

export default function ExperienceComp({ data, isEditing, handleInputChange }) {
  return (
    <div className="resume-exp-container">
      <h1>Work Experience:</h1>
      {data?.map((detail, index) => (
        <div key={detail.id}>
          {isEditing ? (
            <div className="exp-editInput flex">
              <input
                type="text"
                placeholder="Company"
                value={detail?.company}
                onChange={(e) =>
                  handleInputChange("company", e.target.value, index)
                }
              />
              <input
                type="text"
                placeholder="Designation"
                value={detail.designation}
                onChange={(e) =>
                  handleInputChange("designation", e.target.value, index)
                }
              />
              <textarea
                placeholder="Responsibilities"
                value={detail.responsibilities}
                onChange={(e) =>
                  handleInputChange("responsibilities", e.target.value, index)
                }
              />
              <input
                type="text"
                placeholder="Skills"
                value={detail.skills}
                onChange={(e) =>
                  handleInputChange("skills", e.target.value, index)
                }
              />
              <hr />
            </div>
          ) : (
            <>
              <h2>{detail?.company}</h2>
              <h2>{detail?.designation}</h2>
              <p>Responsibilities: {detail?.responsibilities}</p>
              <p>Skills: {detail?.skills}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
