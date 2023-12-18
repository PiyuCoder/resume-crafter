import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const useResumeContext = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [profileData, setProfileData] = useState();
  const [aboutMeData, setAboutMeData] = useState();
  const [academicData, setAcademicData] = useState();
  const [projectData, setProjectData] = useState();
  const [skillData, setSkillData] = useState();
  const [workExperienceData, setWorkExperienceData] = useState();

  const handleProfileSubmit = (data) => {
    setProfileData(data);
  };

  const handleAboutMeSubmit = (data) => {
    setAboutMeData(data);
  };

  const handleAcademicSubmit = (data) => {
    setAcademicData(data);
  };

  const handleProjectSubmit = (data) => {
    setProjectData(data);
  };

  const handleWorkExperienceSubmit = (data) => {
    setWorkExperienceData(data);
  };

  const handleSkillSubmit = (data) => {
    setSkillData(data);

    const combinedData = {
      ...profileData,
      ...aboutMeData,
      ...academicData,
      ...workExperienceData,
      ...projectData,
      ...data,
    };

    console.log("Combined Data:", combinedData);
    console.log("Skills", data);

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(combinedData),
    }).then((res) => res.json());
  };

  const contextValue = {
    profileData,
    aboutMeData,
    workExperienceData,
    handleProfileSubmit,
    handleAboutMeSubmit,
    handleAcademicSubmit,
    handleProjectSubmit,
    handleWorkExperienceSubmit,
    handleSkillSubmit,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
