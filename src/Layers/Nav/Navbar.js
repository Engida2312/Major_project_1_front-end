
import React, {useState, UseRef, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'
import SearchBar from '../../Componets/search-bar'
import { Link } from 'react-router-dom';


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
                        <li><Link className='link' to="/signup">Sign In</Link></li>
                        <li><Link className='btn' to="/login">Share your work</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
