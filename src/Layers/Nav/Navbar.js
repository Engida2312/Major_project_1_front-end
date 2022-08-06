
import React, {useState, UseRef, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'
import SearchBar from '../../Componets/search-bar'
import '../../Assets/Styles/nav.css'
import '../../Assets/Styles/links.css'
import '../../Assets/Styles/button.css'
import '../../Assets/Styles/icons.css'
import '../../Assets/Styles/list.css'

const Navbar = ()=>{
    const [showLinks, setShowLinks] = useState(false)
    useEffect(()=>{
        if(showLinks){
            setShowLinks(true)
        }else{
            setShowLinks(false)
        }
    }, [showLinks])
    return(
        <nav>
            {/* nav header */}
            <div className="nav_center margin_section">
                <div className="nav-header">
                    <img src='' alt="logo" />
                    <AiOutlineMenu className="icon nav-toggle" onClick={()=>{
                        setShowLinks(!showLinks)
                    }} />
                    <a className='link' href="/components">Components</a>
                </div>
                {/* nav middle*/}
                <div className="nav_middle_container">
                    <SearchBar/>
                </div>
                {/* nav left */}
                <div className="nav_left_container">
                    <ul>
                        <li><a className='link icon' id='vsCodeIcon' href=""><VscGithub/></a></li>
                        <li><a className='link' href="">Sign In</a></li>
                        <li><a className='btn' href="">Share your work</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
