import React from 'react'
import './Hero.css'
import Header from './Header/Header'
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
    <div><span className='stroke-text'>RAHAT : </span><span>ASSESS</span></div>
    <div><span> HEAL THRIVE</span></div>
    <div>
    <span>Our website offers personalized mental health and well-being assessments to guide you on your journey to emotional balance and resilience
    </span>
    </div>
    </div>
    </div>
    <div className='right-h'>right side</div>
    </div>
  )
}

export default Hero
