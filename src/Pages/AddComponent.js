import React, {useState, useContext} from 'react'
import { useDispatch } from 'react-redux';
import { addComponent } from '../Redux/reducers/componentReducer';

const AddComponent = () => {
    const dispatch = useDispatch();
    const[component, setComponent] = useState({
        title:'',
        description: ''
    })
    const {title, description} = component;
    const onChange = (e)=>{
               setComponent({...component,[e.target.name]:e.target.value})
    }
    const onSubmit = e =>{
        e.preventDefault();
        console.log(component)
        dispatch(addComponent(component))
        setComponent({
            title:'',
            description: ''
        })
    }
    return (
        <div className='component_container'>
            <div className='compnent-elements hdr-mrg'>
               <h1 className='hdr-title-marg'>Add Component</h1>
               <form  onSubmit={onSubmit}>
               <div className='flex' style={{display:'flex', flexDirection:'column', width:'20rem'}}>
                    <label className='sub-title-marg' htmlFor='Cname'>Name</label>
                    <input className='sub-title-marg' value={title} type='text' id='Cname'placeholder='Component Name' name='title' onChange={onChange} ></input>
                    <label className='sub-title-marg' htmlFor='Cdescription'>Description</label>
                    <input className='sub-title-marg' value={description} type='text' id='Cdescription' placeholder='Description' name='description' onChange={onChange} ></input>
                    <input className='sub-title-marg' type='submit' value='Add Component'/>
               </div>
               </form>
             </div>
        </div>

    )
}

export default AddComponent;