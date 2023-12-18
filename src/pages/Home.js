import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import "../styles/home.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(
    function () {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    },
    [isDeleted]
  );

  return (
    <div className="resume-list-container">
      <button
        className="create-resume-button"
        onClick={() => navigate("/profile")}
      >
        Create Resume
      </button>
      <ul className="resume-list">
        {data.map((item) => (
          <Info
            key={item.id}
            data={item}
            id={item.id}
            setIsDeleted={setIsDeleted}
          />
        ))}
      </ul>
    </div>
  );
}
