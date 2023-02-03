import React from 'react';
import './App.css';

function EducationBlock(name: string, location: string, additional_info: string[], icon: string) {
  return (
    <div className='info_block'>
        <p><strong>{name}</strong>, {location}</p>
        <img className="School_logo" src={icon} alt="School logo" />
        <ul>
            {additional_info.map((item => <li><p>{item}</p></li>))}
        </ul>
        
    </div>  
  );
}

export default EducationBlock;
