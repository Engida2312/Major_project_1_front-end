import React from 'react'
 
 const SideBar =  ()=> {
  const elements = [
    'Navebar',
    'Card',
    'Button',
    'Radio Button',
    'CheckBox',
    'Rating',
    'Slider',
    'Text field',
    'Table',
    'Grid',
    'Card',
    'Drop down',
    'footer',
    'Link',
    'Menu',
    'CheckBox',
    'Box',
    'Container',
    'Modal',
    'Card',
    
  ]
 
  return (
    <div className='side-bar'>
      <h1 className='sid-hdr-mrg'>Components</h1>
      <div className='sid-elem-cont'> 
        {
          elements.map((element, index)=>(
          <div key={index} className='sid-element' >
            <input type={'radio'} name='component' id={element}></input>
            <lable htmlFor={element}>{element}</lable>
          </div>
          ))
        }
      </div>
    </div>
  )
}
export default SideBar