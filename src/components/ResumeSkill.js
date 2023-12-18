import React from "react";
import { IoStarSharp } from "react-icons/io5";

const num = [1, 2, 3, 4, 5];

export default function ResumeSkill({ data, isEditing, handleInputChange }) {
  return (
    <div className="resume-skill-container">
      <h1>Skills:</h1>
      {data?.map((details, index) => (
        <div key={details.id}>
          {isEditing ? (
            <div className="projects-editInput">
              <input
                type="text"
                placeholder="Project Name"
                value={details?.skill}
                onChange={(e) =>
                  handleInputChange("skill", e.target.value, index)
                }
              />
              <input
                type="number"
                placeholder="Project Name"
                value={details?.rating}
                onChange={(e) =>
                  handleInputChange("rating", e.target.value, index)
                }
              />
              <hr />
            </div>
          ) : (
            <div className="skill-star flex">
              <ul>
                <li>
                  <h3>{details?.skill}</h3>
                </li>
              </ul>

              {num.slice(0, details?.rating).map((star) => (
                <IoStarSharp color="yellow" size={20} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
