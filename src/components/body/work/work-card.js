import React from 'react'
import './work-card.css'

function WorkCard({item}) {
  return (
    <div className='work-card'>
        <img src={item.companyLogo} className='work-logo'></img>
        <div className='work-info'>
            <label className='company-name'>{item.name}</label>
            <div className='work-dates'>
                <label>{item.dateOfJoining}</label> - <label>{item.dateEnd}</label>
            </div>
            <div className='work-desc'>
                <p>{item.description}</p>
            </div>
        </div>
    </div>
  )
}

export default WorkCard