import React from 'react';
import './App.css';

function ExperienceBlock(organization: string, location: string, job_title: string, dates: string, additional_info: string[]) {
  return (
    <div className='info_block'>
        <p>{organization}, {location}</p>
        <p><strong>{job_title}</strong> {dates}</p>
        <ul>
            {additional_info.map((item => <li><p>{item}</p></li>))}
        </ul>
        
    </div>  
  );
}

export default ExperienceBlock;
