import React from 'react'
import './education-card.css'

function EducationCard({item}) {
  return (
    <div className='education-card'>
        <div className='education-info'>
            <label className='company-name'>{item.name}</label>
            <div className='education-dates'>
                <label>{item.dateOfJoining}</label> - <label>{item.dateEnd}</label><br></br>
            </div>
            <div className='education-designation'>
              <label>{item.branch}</label>
            </div>
            <div className='education-desc'>
                <p> Grades : {item.grade}</p>
            </div>
        </div>
    </div>
  )
}

export default EducationCard