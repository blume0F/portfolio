import React from 'react'
import './web.css'

function Web() {
  return (
    <div className='web'>
        <div className='web-option'>
            <div className='link-hover'>
                <a href='#projects'>
                    <i class="fi fi-br-globe option-icon"></i>Projects
                </a>
            </div>
        </div>
        <div className='web-option'>
            <div className='link-hover'>
                <a href='#skills'>
                    <i class="fi fi-ss-laptop option-icon"></i>Skills
                </a>
            </div>
        </div>
        <div className='web-option'>
            <div className='link-hover'>
                <a href='#work'>
                    <i class="fi fi-sr-briefcase option-icon"></i>Work
                </a>
            </div>
        </div>
        <div className='web-option'>
            <div className='link-hover'>
                <a href='#education'>
                    <i class="fi fi-sr-graduation-cap option-icon"></i>Education
                </a>
                </div>
        </div>
        <div className='web-option'>
            <div className='link-hover'>
                <a href='#contact'>
                    <i class="fi fi-sr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Web