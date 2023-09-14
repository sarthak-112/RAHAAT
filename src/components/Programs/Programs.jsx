import React from 'react'
import "./Programs.css";
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const progrmas = () => {
  return (
    <div className="Programs" id='programs'>
      <div className="programs-header">
        <span className='stroke-text'>EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className='stroke-text'>TO help YOU</span>
      </div>
    <div className='program-categories'>
      {programsData.map((program)=>(
        <div className='category'>
        {program.image}
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className='join-now'><span>Join Now</span><img src={RightArrow} alt=''/></div>
        </div>
  ))}
  </div>
    </div>
  );
};

export default progrmas
