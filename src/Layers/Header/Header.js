
import '../../Assets/Styles/header.css'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const Header = ()=>{
    return(
        <header>
            <div className="header_container margin_section">
                <div className="header_left">
                    <h1 className="headline">Make your development faster</h1>
                    <p>Lamda UI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI,
                         our fully-loaded component library, or bring your own design system to our production-ready components.</p>
                    <a href=""className="link btn center_center">Expore Components <span className='icon'><IoIosArrowDroprightCircle/></span></a>
                </div>
                <div className="header_right">

                </div>
            </div>
        </header>
    )
}

export default Header
