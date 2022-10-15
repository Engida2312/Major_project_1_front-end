import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../Layers/Side bar/SideBar'
import SingelComponent from '../Layers/Singel Component/SingelComponent'

const Components = () => {
    const categorystore = useSelector((state) => state.category)
    const categorys = categorystore.categorys
    console.log(categorys)
    const error = categorystore.error
    var category_list = '';
    const Highlighting = (id) => {
        const lists = document.querySelectorAll('.sid-element');
        lists.forEach(list => {
            list.classList.remove('highligh-backgroung')
        });
        document.getElementById('sid' + id).classList.add('highligh-backgroung');
        setTitleId(id);
    }
    if (categorystore.loading) {
        category_list = <h2>loading...</h2>
    } else {
        category_list = categorys.map(category => (
            <SideBar key={category.id} category={category} onHighlight={Highlighting} />
        ))
    }
    const [titleid, setTitleId] = useState('');
    

    return (

        <div className='component_container'>
            <div className='side-bar-container'>
                <div className='side-bar'>
                    <h1 className='sid-hdr-mrg'>Components</h1>
                    <div className='sid-elem-cont'>
                        {category_list}
                    </div>

                </div>
            </div>
            <SingelComponent id={titleid}  />





        </div>


    )

}

export default Components