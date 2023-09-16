import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kxbglx6', 'template_hldud6e', form.current, 'vIdAjyTTLoZC6jEj--')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
        <div>
            <span className='stroke-text'>Join Us</span>
            <span> Let's Get</span>
        </div>
        <div>
            <span> Your Mind</span>
            <span className='stroke-text'> All Fine</span>
        </div>
        </div> 


        <div className='right-j'>
            <form ref={form}className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter Your Email to Join'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
