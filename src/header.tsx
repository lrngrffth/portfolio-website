
import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'

function Header({currentPage}: {currentPage: string}) {
  const navigate = useNavigate();
  const [aboutMe, setAboutMe] = useState("page-links");
  const [education, setEducation] = useState("page-links");
  const [experience, setExperience] = useState("page-links");
  const [extracurr, setExtracurr] = useState("page-links");


  useEffect(() => {
    let loaded = false;
    if (!loaded) getPages() 
    return () => {loaded = true}
  }, []);

  function getPages() {
    if (currentPage === "AboutMe") {
      setAboutMe("current-page");
    } else if (currentPage === "Education") {
      setEducation("current-page");
    } else if (currentPage === "Experience") {
      setExperience("current-page");
    } else {
      setExtracurr("current-page");
    }
  }
  


  return (
    <div className='header'>
      <div className='pages'>
        <h3 className={aboutMe} onClick={() => navigate("/")}>About Me</h3>
        <h3 className={education} onClick={() => navigate("/education")}>Education</h3>
        <h3 className={experience} onClick={() => navigate("/experience")}>Experience</h3>
        <h3 className={extracurr}>Extracurriculars</h3>
      </div>
      <div className='block'/>
    </div>
  );
}

export default Header;
