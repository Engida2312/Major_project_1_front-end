import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { SingleComponent as Unique } from '../Redux/reducers/componentReducer';
import { AiOutlineCopy } from 'react-icons/ai'
import swal from 'sweetalert2';

function SingleComponent() {
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        dispatch(Unique(id))

    }, []);
    const componentstore = useSelector((state) => state.component)
    const component = componentstore.si_component
    console.log(component)
    return (
        <div className='comp-sub-section sub-section-marg'>
            <div className='hdr-mrg'>
                <h1 className='hdr-title-marg'>{component.name}</h1>
                <p className='comp-sub-title sub-title-marg'>{component.discription} </p>
            </div>
            <div className='comp-steps-container hdr-mrg'>
                <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>output</h1>

                <div className='comp-sub-title sub-elem-hdr-marg '>
                    <code>{component.code_referance}</code>
                </div>

            </div>
            <div className='comp-steps-container hdr-mrg'>
                <div className='code_flex_container'>
                    <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>code</h1>
                    <AiOutlineCopy title='copy the code' className='comp-sub-elem-hdr sub-elem-hdr-marg' onClick={() => {
                        navigator.clipboard.writeText(component.code_referance)
                        swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'code is succesfully copied!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }} />
                </div>
                <div className='comp-sub-title sub-elem-hdr-marg '>
                    <code>{component.code_referance}</code>
                </div>

            </div>
        </div>
    )
}

export default SingleComponent