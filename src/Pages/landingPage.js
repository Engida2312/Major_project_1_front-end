import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddComponent } from '../Redux/reducers/componentReducer';
import { useNavigate } from "react-router-dom";



const Landing = () => {
    const categorystore = useSelector((state) => state.category)
    const categorys = categorystore.categorys
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = categorystore.error
    const ref = Math.random().toString(36).slice(2);
    const u_id = Math.floor((1 + Math.random()) * 0x100)
    console.log(u_id);
    const [component, setComponent] = useState({
        user_id: u_id,
        category_id: '',
        name: '',
        discription: '',
        code_referance: ref
    })
    const { category_id,name, discription,code_referance } = component;
    const onChange = (e) => {
        setComponent({ ...component, [e.target.name]: e.target.value })
    }
    function validate() {
        
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        validate();
        console.log(component)
        dispatch(AddComponent(component))
        // navigate('/components')
        setComponent({
        user_id: '',
        category_id: '',
        name: '',
        discription: '',
        code_referance: ''
        })
       
    }
    return (
        <div className='component_container'>
                        {error? <div className='show_error'><h2>{error}</h2></div> :''}
            <div className='compnent-elements hdr-mrg '>
                <h1 className='hdr-title-marg'>Add component</h1>
                <form onSubmit={onSubmit}>
                    <div className='flex' style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
                       <label className='sub-title-marg' htmlFor='Cname'>Name</label>
                        <input className='sub-title-marg' value={name} type='text' id='Cname' placeholder='Component Name' name='name' onChange={onChange}required ></input>
                        <label className='sub-title-marg' htmlFor='Cdescription'>Description</label>
                        <input className='sub-title-marg' value={discription} type='text' id='Cdescription' placeholder='Description' name='discription' onChange={onChange} ></input>
                        <label className='sub-title-marg' htmlFor='category'>Category</label>
                        <select name="category_id" id="categorys" onChange={onChange} required>
                            {categorys.map(category => (
                                <option value={category.id}>{category.title}</option>
                            ))}
                        </select>
                        <label className='sub-title-marg' htmlFor='code_ref'>Code Input</label>
                            <iframe
                                height="375" width="700"
                                src="https://www.interviewbit.com/embed/snippet/f37b06918e8a8b08bef3"
                                title='Interviewbit Ide snippet/f37b06918e8a8b08bef3'
                                loading="lazy" allow="clipboard-write"
                                allowfullscreen referrerpolicy="unsafe-url"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation  allow-popups-to-escape-sandbox">
                            </iframe>
                        <textarea id='code_ref' className='sub-title-marg' style={{ width: '43rem' }} name='code_referance' placeholder='submite the code here after checking in the code editor' rows="10" cols="50" required>
                        </textarea>
                        <input className='sub-title-marg submit' type='submit' value='Add Component' />
                    </div>
                </form>
            </div>
            <br></br>

        </div>

    )
};
export default Landing;