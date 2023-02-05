import React, { useState } from 'react';
import './App.css';
import Header from './header';
import work from './images/work.gif';
import { job_experience, leadership_experience } from './data';
import ExperienceBlock from './ExperienceBlock'
import TechExpBlock from './TechExpBlock';


function Experience() {
  return (
    <div className="App">
      <h1 className="site-name">Lauren Griffith</h1>
      <Header 
        currentPage='Experience'/>
        <div className='page-header'><h2>Experience{<img className="work-gif" src={work} alt="computer 'work in progress' gif" />}</h2></div>
        <div className="information">
          <div className="experience-layout">
            <div className='experiences'>
              <h2>Job Experience</h2>
              <hr></hr>
              <ul>
                {job_experience.map((Job => <li>{ExperienceBlock(Job)}</li>))}
              </ul>
              <h2>Leadership Experience</h2>
              <hr></hr>
              <ul>
                {leadership_experience.map((Job => <li>{ExperienceBlock(Job)}</li>))}
              </ul>
            </div>
            <TechExpBlock/>
          </div>
        </div>
    </div>
  );
}

export default Experience;
