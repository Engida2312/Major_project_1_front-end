import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { SingleCategory, UpdateCategory } from '../Redux/reducers/categoryReducer';

const UpdateCategorys = () => {
    const categorystore = useSelector((state) => state.category.si_category)
    const params = useParams();
    const dispatch = useDispatch();
    const [category, setCategory] = useState({
        title: '',
        discription: ''
    })
    useEffect(() => {
        dispatch(SingleCategory(params.id))
    }, []);

    // setCategory({
    //     title: categorystore.title,
    //     discription: categorystore.discription
    // })
    
    const { title, discription } = category;
    const onChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(category)
          dispatch(UpdateCategory([params.id, category]))
        setCategory({
            title: '',
            discription: ''
        })
    }
    return (
        <div className='component_container'>
            <div className='compnent-elements hdr-mrg'>
                <h1 className='hdr-title-marg'>Update Category</h1>
                <form onSubmit={onSubmit}>
                    <div className='flex' style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
                        <label className='sub-title-marg' htmlFor='Cname'>Name</label>
                        <input className='sub-title-marg' value={title} type='text' id='Cname' placeholder='Component Name' name='title' onChange={onChange} required></input>
                        <label className='sub-title-marg' htmlFor='Cdescription'>Description</label>
                        <input className='sub-title-marg' value={discription} type='text' id='Cdescription' placeholder='Description' name='discription' onChange={onChange} ></input>
                        <input className='sub-title-marg' type='submit' value='Update ' />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default UpdateCategorys;