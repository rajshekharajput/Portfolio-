import { useState } from 'react';
import './contact.scss'

export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id='contact'>
      <img src='assets/lauda.webp' className='trip' alt=''/>

      <div className="left">
        {/* <img src='assets/wings.png' alt=''/> */}
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>send</button>
          {message && <span>thanks!</span>}
        </form>
      </div>
      
    </div>
  )
}
