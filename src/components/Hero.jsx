import React from 'react'
import './Hero.css'
import Header from '../components/Header/Header'
import Hero_image from "../assets/hero_image.png";
import Hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
const Hero = () => {
  return (
    <div className='hero'>
    <div className='left-h'>
    <Header/>
    <div className='the-best-ad'>
    <div></div>
    <span>Nurturing Minds, Building Resilience</span>
    </div>

    <div className='hero-text'>
    <div><span className='stroke-text'>AIKYAM : </span><span>ASSESS,</span></div>
    <div><span> HEAL, THRIVE</span></div>
    <div>
      <span>Our website offers personalized mental health and well-being assess    . . .  . . . .....& guide you on your journey to emotional balance and resilience
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

      <div className='heart-rate'>
        <img src={Heart} alt=''/>
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </div>
      <img src={Hero_image} alt='' className='hero-image'/>
      <img src={Hero_image_back} alt='' className='hero-image-back'/>

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
