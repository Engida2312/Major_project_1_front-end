import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../Layers/Side bar/SideBar'
import SingelComponent from '../Layers/Singel Component/SingelComponent'
const Components = ()=>  {
    const components = useSelector((state)=>state.component)
    console.log(components)
    const [titleid, setTitleId] = useState('');
  
  const Highlighting = (id)=>{
     const lists = document.querySelectorAll('.sid-element');
     lists.forEach(list => {
         list.classList.remove('highligh-backgroung')
     });
     document.getElementById('sid'+id).classList.add('highligh-backgroung');
     setTitleId(id);
        }
    
        return (

            <div className='component_container'>
                 <div className='side-bar-container'>
                    <div className='side-bar'>
                        <h1 className='sid-hdr-mrg'>Components</h1>
                        <div className='sid-elem-cont'>
                        {components.map(component => (   
                                <SideBar key={component.id} component={component} onHighlight ={Highlighting}  />    
                        ))}
                       </div>
                     
                    </div>
                </div>
               
             <SingelComponent id = {titleid} />
               
               
                  
                
              
            </div>


        )
    
}

export default Components