export const yearGenerator = (start, end) => {
  let yearArr = [];

  for (let i = start; i < end; i++) {
    yearArr.push(i);
  }

  return yearArr;
};

export const qualificationArr = [
  {
    qual: "Graduation",
    courses: ["B.Tech", "B.C.A", "B.A", "B.Sc."],
  },

  {
    qual: "Post-graduation",
    courses: ["M.Tech", "M.C.A", "M.A", "M.Sc."],
  },

  {
    qual: "Intermediate",
    courses: ["Intermediate"],
  },

  {
    qual: "High school",
    courses: ["High school"],
  },
];
