import React from 'react'
import './mobile.css'

function Mobile({isOpen,setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi fi-rr-cross-circle"></i>
        </div>
        <div className='mobile-options'>
            <div className='mobile-option'>
                <a href='#projects'>
                    <i class="fi fi-br-globe option-icon"></i>Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#skills'>
                    <i class="fi fi-ss-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#work'>
                    <i class="fi fi-sr-briefcase option-icon"></i>Work
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#education'>
                <i class="fi fi-sr-graduation-cap option-icon"></i>Education
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contact'>
                    <i class="fi fi-sr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Mobile