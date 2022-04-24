import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                <span className='info-name'>Abhishek Kumar's</span> home on the internet...<br/>
                A web developer, gamer, geek!
                <div className='download'>
                  <a download href='https://drive.google.com/file/d/1mFZhvjZPBtBJWk07cQqT2j9sDyUXGbq7/view?usp=sharing' target="_blank">
                    <i class='fi-rr-cloud-download download-icon'/>
                    Resume
                  </a>
                </div>
            </div>
            <div className='about-photo'>
                <img src={require('../../../assets/profile.jpg')}
                 className='picture' />
            </div>
        </div>
        <SocialContact/>
    </div>
  )
}

export default About