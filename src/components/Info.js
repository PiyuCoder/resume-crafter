import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Info({ data, id, setIsDeleted }) {
  const navigate = useNavigate();
  const openResume = () => {
    console.log(id);
    navigate("/resume", { state: data });
  };

  const deleteRecord = () => {
    fetch(`/api/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((msg) => console.log(`Deleted Successfully ${data.name}'s record.`))
      .catch((err) => console.log(err));
    setIsDeleted((prev) => !prev);
  };

  return (
    <div className="info-data">
      <h2 className="resume-name" onClick={openResume}>
        {data?.name}
      </h2>
      <p className="resume-name" onClick={openResume}>
        {data?.currDesignation}
      </p>
      <button className="delete-button" onClick={deleteRecord}>
        Delete
      </button>
    </div>
  );
}
