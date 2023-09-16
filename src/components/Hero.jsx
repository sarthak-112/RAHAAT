import React from 'react'
import './Hero.css'
import Header from '../components/Header/Header'
import Hero_image from "../assets/hero_image.png";
import {motion} from 'framer-motion'

import Calories from "../assets/calories.png";
const Hero = () => {
  const transition = {type: 'spring', duration:3}
  return (
    <div className='hero' id='Home'>
    <div className='left-h'>
    <Header/>
    <div className='the-best-ad'>
    <motion.div
      initial={{left:'238px'}}
      whileInView={{left:'8px'}}
      transition={{...transition,type:'tween'}}>
    </motion.div>
    <span>Nurturing Minds, Building Resilience</span>
    </div>

    <div className='hero-text'>
    <div><span className='stroke-text'>AIKYAM : </span><span>ASSESS,</span></div>
    <div><span> HEAL, THRIVE</span></div>
    <div>
      <span>Our website offers personalized mental health and well-being assess & guide you on your journey to emotional balance and resilience
      </span>
      </div>
    </div>

    <div className="figures">
      <div>
        <span>70+</span>
        <span>Professionals</span>
      </div>
      <div>
        <span>150+</span>
        <span>Users Reached</span>
      </div>
      <div>
        <span>50+</span>
        <span>Distress programs</span>
      </div>
    </div>

    <div className='hero-buttons'>
      <buttons className="btn">Get Started</buttons>
      <buttons className="btn">Know More</buttons>
    </div>
    </div>

    <div className='right-h'>
      <button className='btn'>Join Now</button>

      <img src={Hero_image} alt='' className='hero-image'/>

      <div className='calories'>
        <img src={Calories} alt=''/>
        <div>
        <span>Surveys Taken</span>
        <span>50</span>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Hero
