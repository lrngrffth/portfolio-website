import React from 'react';
import './App.css';
import { School } from './data'

function EducationBlock(school: School) {
  return (
    <div className='info_block'>
        <p><strong>{school.name}</strong>, {school.location}</p>
        <img className="School_logo" src={school.icon} alt="School logo" />
        <ul>
            {school.additional_info.map((item => <li><p>{item}</p></li>))}
        </ul>
        
    </div>  
  );
}

export default EducationBlock;
