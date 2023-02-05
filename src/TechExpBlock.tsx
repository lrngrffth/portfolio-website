import React from 'react';
import './App.css';
import { technical_experience} from './data'

function TechExpBlock() {
  return (
    <div className='tech_block'>
        <p>Technical Experience</p>
        <hr></hr>
        <ul>
            {technical_experience.map((item => <li><p>{item}</p></li>))}
        </ul>
        
    </div>  
  );
}

export default TechExpBlock;
