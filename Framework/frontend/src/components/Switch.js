import React from 'react'
import './Switch.css'

const Switch = ({ isToggled, onToggle }) => {
  return (
    <label className='switch'>
      <input type='checkbox' checked={isToggled} onChange={onToggle}></input>
      <span className='slider'></span>
    </label>
  )
}

export default Switch
