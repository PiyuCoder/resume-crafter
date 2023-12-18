import React from "react";

export default function ProjectExperience({
  data,
  isEditing,
  handleInputChange,
}) {
  return (
    <div className="resume-project-container">
      <h1>Projects:</h1>
      {data?.map((details, index) => (
        <div key={details.id}>
          {isEditing ? (
            <div className="projects-editInput">
              <input
                type="text"
                placeholder="Project Name"
                value={details?.projectName}
                onChange={(e) =>
                  handleInputChange("projectName", e.target.value, index)
                }
              />
              <input
                type="text"
                placeholder="Duration Took"
                value={details.durationTook}
                onChange={(e) =>
                  handleInputChange("durationTook", e.target.value, index)
                }
              />
              <textarea
                placeholder="Description"
                value={details.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value, index)
                }
              />
              <input
                type="text"
                placeholder="Technologies"
                value={details.technologies}
                onChange={(e) =>
                  handleInputChange("technologies", e.target.value, index)
                }
              />
              <hr />
            </div>
          ) : (
            <>
              <h2>{details?.projectName}</h2>
              <h2>{details?.durationTook}</h2>

              <p>{details?.description}</p>

              <p>{details?.technologies}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
