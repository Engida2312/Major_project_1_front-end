
import React, {useState, UseRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'
import SearchBar from '../../Componets/search-bar'
import logo from '../../Assets/Images/avatar.png'

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
                <div className="nav-header center_center gap-1">
                    <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                    <AiOutlineMenu className="icon nav-toggle" onClick={()=>{
                        setShowLinks(!showLinks)
                    }} />
                    <Link className='link' to="/components">Components</Link>
                </div>
                {/* nav middle*/}
                <div className="nav_middle_container">
                    <SearchBar/>
                </div>
                {/* nav left */}
                <div className="nav_left_container">
                    <ul>
                        <li><a className='link icon' id='vsCodeIcon' target={'_blank'} href="https://github.com/Engida2312/Major_project_1_front-end"><VscGithub/></a></li>
                        <li><Link className='link' to="">Sign In</Link></li>
                        <li><Link className='btn' to="">Share your work</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
