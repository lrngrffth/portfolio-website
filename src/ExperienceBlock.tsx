import React, { useState } from 'react';
import './App.css';
import { Job } from './data'

function ExperienceBlock(job: Job) {
  const [view, setView] = useState(false);
  return (
    <div className='info_block'>
        <p>{job.organization}, {job.location}</p>
        <p><strong>{job.job_title}</strong> {job.dates}</p>
        {!view &&
            <a className='view-more' onClick={() => setView(!view)}>View More ∨</a>
        }
        {view &&
          <ul>
              {job.additional_info.map((item => <li><p>{item}</p></li>))}
          </ul> 
        }
        {view && job.projects &&
          <ul>
            <hr></hr>
            <h2><strong>Projects</strong></h2>
            {job.projects?.map((project => <li>
              <h2>{project.name}</h2>
              <ul>
                <p><strong>Background:</strong></p>
                {project.goals.map((goal => <li><p>{goal}</p></li>))}
              </ul>
              <ul>
                <p><strong>Process:</strong></p>
                {project.additional_info.map((item => <li><p>{item}</p></li>))}
              </ul>
              <ul>
                {project.images?.map((image => <li><img className="project-image" src={image} alt="image of project" /></li>))}
              </ul>
            </li>))}
          </ul>
        }
        {view &&
          <a className='view-more' onClick={() => setView(!view)}>View Less ^</a>}
    </div>  
  );
}

export default ExperienceBlock;
