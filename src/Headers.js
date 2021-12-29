import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const TitleAndAdd = (props) => { 
  let { name } = props
    
  return (
    <div className='section-title-container'>
      <h2 className='section-title'>{name}</h2>
      <span>
        <span className='add-container'>
          <FontAwesomeIcon icon={faPlus} className="plusicon"/>
          <span>Add</span>
        </span>
      </span>
    </div>
  )
}