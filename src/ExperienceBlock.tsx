import React from 'react';
import './App.css';
import { Job } from './data'

function ExperienceBlock(job: Job) {
  return (
    <div className='info_block'>
        <p>{job.organization}, {job.location}</p>
        <p><strong>{job.job_title}</strong> {job.dates}</p>
        <ul>
            {job.additional_info.map((item => <li><p>{item}</p></li>))}
        </ul>
        
    </div>  
  );
}

export default ExperienceBlock;
