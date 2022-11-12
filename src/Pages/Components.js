import React, { useEffect } from 'react'
import SideBar from '../Layers/Side bar/SideBar'
import ComponentIntro from '../Layers/ComponentIntro'
import { GetCategory } from '../Redux/reducers/categoryReducer';
import { useDispatch } from 'react-redux';
const Components = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategory())
  }, []);
    return (

        <div className='component_container'>
            <div className='side-bar-container'>

                <div className='side-bar'>
                   <h1 className='sid-hdr-mrg'>Components</h1>
                   <SideBar />
                </div>
            </div>
            <div className='compnent-elements'>
                <ComponentIntro />
            </div>


        </div>


    )

}

export default Components