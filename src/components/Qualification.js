import React, { useEffect, useState } from "react";
import { yearGenerator, qualificationArr } from "../helper/dataGenerator";

export default function Qualification({ removeQual, top, id, setData }) {
  const [yearArray, setYearArray] = useState([]);
  const [grad, setGrad] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [institute, setInstitute] = useState("");

  const qData = {
    qualification: grad,
    program,
    year,
    institute,
  };

  useEffect(() => {
    setData((prev) => {
      if (!prev && grad && year && institute && program) {
        // If prev is undefined or empty array, and grad, year, and institute have values
        return [qData];
      } else if (grad && year && institute && program) {
        const exist = prev && prev.find((item) => item.id === id);
        return exist
          ? prev.map((item) => (item.id === id ? { ...item, ...qData } : item))
          : [...prev, { ...qData, id }];
      } else {
        // If any of grad, year, or institute is empty, return the previous state
        return prev;
      }
    });
  }, [grad, year, institute, id, setData]);

  useEffect(() => {
    const yearArr = yearGenerator(2000, 2024);
    setYearArray(yearArr);
  }, []);

  return (
    <div className="academic-container flexV">
      <div className="flex qual-program-div">
        <div className="qual-div flex">
          <label>Qualification:</label>
          <select onChange={(e) => setGrad(e.target.value)}>
            <option value="--Select--">--Select--</option>
            {qualificationArr.map((q, i) => (
              <option value={q.qual} key={i}>
                {q.qual}
              </option>
            ))}
          </select>
        </div>

        <div className="program-div flex">
          <label>Program:</label>
          <select onChange={(e) => setProgram(e.target.value)}>
            <option value="--Select--">--Select--</option>
            {qualificationArr.map((q) =>
              q?.courses.map((course, j) => (
                <option value={course} key={j}>
                  {course}
                </option>
              ))
            )}
          </select>
        </div>
        <div className="year-div flex">
          <label>Passing year:</label>
          <select onChange={(e) => setYear(e.target.value)}>
            <option value="--Year--">--Year--</option>
            {yearArray.map((year, i) => (
              <option value={year} key={i}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="college-div">
        <label>Institute/College:</label>
        <input
          placeholder="Institute name"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
      </div>

      <button onClick={() => removeQual(id)}>X</button>
    </div>
  );
}
