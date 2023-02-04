import React from 'react';
import './App.css';
import Header from './header';
import work from './images/work.gif';
import { education } from './data';
import EducationBlock from './EducationBlock'

function Experience() {
  return (
    <div className="App">
      <h1 className="site-name">Lauren Griffith</h1>
      <Header 
        currentPage='Experience'/>
        <div className='page-header'><h2>Experience  {<img className="work-gif" src={work} alt="computer 'work in progress' gif" />}</h2></div>
        <div className="information">
          <ul>
            {education.map((School => <li>{EducationBlock(School.name, School.location, School.additional_info, School.icon)}</li>))}
          </ul>
        </div>
    </div>
  );
}

export default Experience;
