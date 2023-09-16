import React from 'react'
import { plansData } from '../../data/plansData'
import './Plans.css'
import whitetick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
        <div className='programs-header' style={{gap:'2rem'}}>
            <span>GET READY TO</span>
            <span className='stroke-text'>START</span>
            <span>YOUR JOURNEY</span>
        </div>

    <div className='plans'>
        {plansData.map((plan, i)=>(
            <div className='plan' key={i}>
                {plan.icon}
                <span>{plan.name}</span>
    
                <div className='features'>
                   {plan.features.map((feature,i)=>(
                    <div className='feature'>
                       <img src={whitetick} alt=''/>
                       <span key={i}>{feature}</span>
                    </div>
                   ))} 
                </div>

            <div>
                    <span>SEE DETAILS</span>
            </div>

            <button className='btn'>JOIN NOW</button>

            </div>
        ))}
    </div>
    </div>
  )
}

export default Plans
