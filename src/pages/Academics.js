import React, { useEffect, useState } from "react";
import { useResumeContext } from "../context";
import { useNavigate } from "react-router-dom";
import Qualification from "../components/Qualification";
import "../styles/academics.css";

export default function Academics() {
  const { handleAcademicSubmit } = useResumeContext();
  const [data, setData] = useState([]);
  const [dataToSend, setDataToSend] = useState();
  const [count, setCount] = useState(1);
  const [qualifications, setQualifications] = useState([]);

  const navigate = useNavigate();
  // setDataToSend((prev) => prev && [...prev, data]);

  console.log("To Send:", data);
  const handleSubmit = () => {
    const academicsData = {
      academics: data,
    };

    handleAcademicSubmit(academicsData);
    console.log("data:", data);
    navigate("/experience");
  };

  const handleAddBtn = () => {
    setQualifications([...qualifications, { id: Date.now() }]);
  };

  const removeQual = (id) => {
    setQualifications((prev) => prev.filter((qId) => qId.id !== id));
  };

  return (
    <div className="academic-main flexC">
      <h1>Qualification details</h1>
      {qualifications.map((qualification) => (
        <Qualification
          key={qualification.id}
          id={qualification.id}
          removeQual={removeQual}
          setData={setData}
        />
      ))}
      <button className="nxt" onClick={handleSubmit}>
        Next
      </button>
      <div className="profile-back-btn">
        <button onClick={() => navigate("/about_me")} type="submit">
          Back
        </button>
      </div>
      <button className="add" onClick={handleAddBtn}>
        +
      </button>
      <label> Add Qualification</label>
    </div>
  );
}
