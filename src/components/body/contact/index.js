import React from 'react'
import Separator from '../../common/separator'
import './contact.css'
import SocialContact from '../../common/social-contact'

function Contact() {
  return (
    <div className='contact'>
      <Separator></Separator>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Feel free to connect with me on these platforms :)</p>
          <SocialContact></SocialContact>
        </div>
        <div className='download'>
            <a download href='#'>
              <i class='fi-rr-cloud-download download-icon'/>
              Download Resume
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact