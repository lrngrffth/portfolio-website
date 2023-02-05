import React from 'react';
import './App.css';
import Header from './header';
import books from './images/books.gif';
import { education } from './data';
import EducationBlock from './EducationBlock'

function Education() {
  return (
    <div className="App">
      <h1 className="site-name">Lauren Griffith</h1>
      <Header 
        currentPage='Education'/>
        <div className='page-header'><h2>My Education  {<img className="books-gif" src={books} alt="book stack gif" />}</h2></div>
        <div className="information">
          <ul>
            {education.map((School => <li>{EducationBlock(School)}</li>))}
          </ul>
        </div>
    </div>
  );
}

export default Education;
