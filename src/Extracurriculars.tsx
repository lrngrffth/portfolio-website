import React, { useState } from 'react';
import './App.css';
import Header from './header';
import extra from './images/extras.gif';
import ExperienceBlock from './ExperienceBlock'


function Extracurriculars() {
  return (
    <div className="App">
      <h1 className="site-name">Lauren Griffith</h1>
      <Header 
        currentPage='Extracurriculars'/>
        <div className='page-header'><h2>Extracurriculars{<img className="extra-gif" src={extra} alt="coffee and cake café gif" />}</h2></div>
        <p><strong>Sorry this page is still under construction</strong></p>
        <p>Please come back later!</p>
    </div>
  );
}

export default Extracurriculars;
