import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = ({ category: { id, title }, onHighlight }) => {

  return (
    
       <div id={'sid' + (id)} className='sid-element hvr-backgroung '  >
        <Link to={'#'+(id)}>
      <input className='dis-none' type='radio' name='component' id={id} onClick={() => onHighlight(id)}  ></input>
       </Link>
      <label className='hvr-pointer' htmlFor={id}>{title} </label>
       </div>
  )
}
export default SideBar