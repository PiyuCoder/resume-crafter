import React from "react";

export default function Education({ data, isEditing, handleInputChange }) {
  return (
    <div className="resume-edu-container">
      <div>
        <h1>Education:</h1>
        {data?.map((detail, index) => (
          <div key={detail.id}>
            {isEditing ? (
              <div className="edu-editInput">
                <input
                  type="text"
                  placeholder="Qualification"
                  value={detail?.qualification}
                  onChange={(e) =>
                    handleInputChange("qualification", e.target.value, index)
                  }
                />
                <input
                  type="text"
                  placeholder="Program"
                  value={detail.program}
                  onChange={(e) =>
                    handleInputChange("program", e.target.value, index)
                  }
                />
                <input
                  type="text"
                  placeholder="Institute"
                  value={detail.institute}
                  onChange={(e) =>
                    handleInputChange("institute", e.target.value, index)
                  }
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={detail.year}
                  onChange={(e) =>
                    handleInputChange("year", e.target.value, index)
                  }
                />
              </div>
            ) : (
              <>
                <h2>{detail?.qualification}</h2>
                <div className="flex">
                  <p>{`${detail?.program}, ${detail?.institute} - ${detail?.year}`}</p>
                </div>

                <p></p>
              </>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
