import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='left-r'>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        <div className='right-r'>
          <span>SOME REASONS</span>
          <div>
            <span className='stroke-text'>WHY</span>
            <span> choose us</span>
          </div>
          
          <div className='details-r'>
            <div>
              <img src={tick} alt=''/>
                <span>highest quality assessments and guidance</span>
            </div>
            <div>
              <img src={tick} alt=''/>
                <span>user-friendly interface and engaging content</span>
            </div>
            <div>
              <img src={tick} alt=''/>
                <span>wide range of assessments, tailored to different age groups and needs</span>
            </div>
            <div>
              <img src={tick} alt=''/>
                <span>We take data security and privacy seriously</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reasons
