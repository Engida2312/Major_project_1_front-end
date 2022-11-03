import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import defaultAvatar from '../../Assets/Images/avatar.png'


const SingelCategory = (id) => {
    const categorystore = useSelector((state) => state.category)
    const categorys = categorystore.categorys
    const componentstore = useSelector((state) => state.component)
    const components = componentstore.components
    var singleElement = '';
    var singlecomponent = '';
    if (categorystore.loading) {
        singleElement = ''
    } else if (categorystore.error) {
        singleElement = categorystore.error
    }
    else {
        singleElement = categorys.filter(category => {
            return category.id === id.id;
        });
    }
    if (componentstore.loading) {
        singlecomponent = ''
    } else if (componentstore.error) {
        singlecomponent = ''
    }
    else {
        singlecomponent = components.filter(component => {
            return component.category_id === id.id;
        });
    }
    console.log(id)
    return (
        <div className='compnent-elements'>
            {singleElement.length === 0 ?
                <div className='hdr-mrg' >
                    <h1 className='hdr-title-marg'>Overview</h1>
                    <p className='comp-sub-title sub-title-marg'>Our Components are simple, highly customizable and easy to use </p>
                </div>
                :
                singleElement.map(element => (
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
                    <ol className='comp-sub-title '>
                        <li>
                            1. choose the component you want to use from the side bar.
                        </li>
                        <li>
                            2. take a look  on the compnent you choose and copy the code.
                        </li>
                    </ol>
                </div>
                <div className='comp-snipt-container'>
                    {singleElement.length === 0 ?
                        <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>example components</h1>
                        :
                        <div>
                            <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>Available components</h1>
                        </div>

                    }
                    {singlecomponent.length === 0 ?
                        <h6 className='comp-sub-elem-hdr sub-elem-hdr-marg'>no components to display </h6>
                        :
                        singlecomponent.map(element => (
                            <Link  to={'/components/'+(element.id)}   key={element.id} >
                            <div className="card sub-elem-hdr-marg">
                               
                                <div className='comp-sub-title sub-elem-hdr-marg '>
                                    <code>
                                        {element.code_referance}
                                    </code>
                                </div>
                                <div className="card_bottom center_center gap-1">
                                    <div className='card_detail_left center_center gap-0_5'>
                                        <a href=""><img src={defaultAvatar} className='profile_img' alt="profile" /></a>
                                        <p>yohannes</p>
                                    </div>

                                    <div className='card_detail_right center_center gap-0_5'>
                                        <AiFillHeart /><span>903</span>
                                        <AiFillEye /><span>293</span>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))

                    }


                </div>
            </div>
        </div>



    )
}
export default SingelCategory