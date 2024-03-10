import React from 'react'

const Contact = () => {
  return (
    <div  className='contact container'>
     <div className="title">
     <h2>Contact</h2>
     </div>

     <div className="contact-content">
      <div className="contact-left">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6871.93152025014!2d31.521611231022497!3d30.550271428300576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f15bb4575083%3A0xdece40bf6a1e0af1!2z2YbYp9iv2Yog2KfZhNi52LXZhNmI2KzZiiDYp9mE2LHZitin2LbZig!5e0!3m2!1sar!2seg!4v1710079211405!5m2!1sar!2seg" ></iframe>     
       </div>
      <div className="contact-right">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone' />
        <textarea placeholder='Your Message'></textarea>
      </div>
     </div>
    
    </div>
  )
}

export default Contact
