import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import defaultAvatar from '../../Assets/Images/avatar.png'


const SingelComponent = (id) => {
    const categorystore = useSelector((state) => state.category)
    const categorys = categorystore.categorys
    var singleElement = '';
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
                            2. take a look  on the compnent you choose and copy the code .
                        </li>
                    </ol>
                </div>
                <div className='comp-snipt-container'>
                    {singleElement.length === 0 ?
                       <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>example components</h1>
                        :
                        <div>
                            <h1 className='comp-sub-elem-hdr sub-elem-hdr-marg'>Available components</h1>
                            <Link to={`updateCategory/${id.id}`}><button>update</button></Link>
                        </div>
                       
                    }

                    <div className="card">
                        <iframe
                            height="375" width="700"
                            src="https://www.interviewbit.com/embed/snippet/f37b06918e8a8b08bef3"
                            title='Interviewbit Ide snippet/f37b06918e8a8b08bef3'
                            loading="lazy" allow="clipboard-write"
                            allowfullscreen referrerpolicy="unsafe-url"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation  allow-popups-to-escape-sandbox">
                        </iframe>
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

                </div>
            </div>
        </div>



    )
}
export default SingelComponent