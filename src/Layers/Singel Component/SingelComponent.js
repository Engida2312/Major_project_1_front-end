import React, {useContext} from 'react'
import { useSelector } from 'react-redux'

const SingelComponent = (id) => {
    const components = useSelector((state)=>state.component)
    const singleElement = components.filter(component => {
        return component.id === id.id;
      });
      console.log(id.id)
  return (
        <div className='compnent-elements'>
              {singleElement.length===0 ?
               <div className='hdr-mrg' >
               <h1 className='hdr-title-marg'>Overview</h1>
              <p className='comp-sub-title sub-title-marg'>Our Components are simple, highly customizable and easy to use </p>
              </div> 
             :
             singleElement.map(element=>(
                <div className='hdr-mrg' key={element.id}>
                <h1 className='hdr-title-marg'>{element.title}</h1>
               <p className='comp-sub-title sub-title-marg'>{element.discription} </p>
               </div> 
              )) 
             
              }  
        <div className='comp-sub-section sub-section-marg'>
        <h1 className='comp-sub-header hdr-title-marg '>Introduction</h1>
        <p className='comp-sub-title sub-title-marg'>You are easy two steps behind to create a highly responsive web app. </p>
        <div className='comp-steps-container'>
            <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>Steps</h1>
            <ol className='comp-sub-title'>
                <li>
                    1. choose the component you want to use from the side bar.
                </li>
                <li>
                    2. take a look  on the compnent you choose and copy the code .
                </li>
            </ol>
        </div>
        <div className='comp-snipt-container'>
                <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>example components</h1>
         </div>
    </div>
    </div>

    

  )
}
export default SingelComponent