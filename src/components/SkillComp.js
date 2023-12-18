import React, { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";

const num = [1, 2, 3, 4, 5];

export default function SkillComp({ setData, id, removeSkill }) {
  const [skill, setSkill] = useState("");
  const [rating, setRating] = useState(0);

  const skillData = {
    skill,
    rating,
  };

  useEffect(() => {
    setData((prev) => {
      if (prev === undefined && skill) {
        return [skillData];
      } else if (skill) {
        const exist = prev.find((item) => item.id === id);

        return exist
          ? prev.map((item) =>
              item.id === id ? { ...item, ...skillData } : item
            )
          : [...prev, { ...skillData, id }];
      } else {
        return prev;
      }
    });
  }, [skill, rating, id]);

  return (
    <div className="skill-container flex">
      <input
        placeholder="Skills"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <select className="flex" onChange={(e) => setRating(e.target.value)}>
        <option value="">--Rating--</option>
        {num.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>

      {num.slice(0, rating).map((star, i) => (
        <div className="star-div" key={i}>
          <IoStarSharp color="yellow" />
        </div>
      ))}
      <button onClick={() => removeSkill(id)}>X</button>
    </div>
  );
}
