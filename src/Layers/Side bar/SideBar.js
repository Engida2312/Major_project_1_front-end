import React from 'react'

const SideBar = ({ component: { id, title }, onHighlight }) => {

  return (

    <div id={'sid' + (id)} className='sid-element hvr-backgroung '  >
      <input className='dis-none' type='radio' name='component' id={id} onClick={() => onHighlight(id)}  ></input>
      <label className='hvr-pointer' htmlFor={id}>{title} </label>
    </div>

  )
}
export default SideBar