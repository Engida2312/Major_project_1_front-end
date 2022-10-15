import SearchBar from "../../Componets/search-bar";
import Logo from '../../Assets/Images/avatar.png'
import { Link, useNavigate } from "react-router-dom";
import {GoDashboard} from 'react-icons/go'
import {CgComponents} from 'react-icons/cg'
import {MdOutlineCategory} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../../Features/Auth/authSlice'
import '../../Assets/Styles/admin-sidebar.css'
import '../../Assets/Styles/accordion.css'


const AdminSidebar = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)

    const onLogout = ()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return <>

    <nav className="flex justify_content_sb align_items_c admin_top_nav">
        <SearchBar/>
    
        <li><p className='btn' onClick={onLogout} >Logout</p></li>
    </nav>
    <div className="a_sidebar_container">
        <div className="a_sidebar_top">
            <div className="col center_center m-2">
                <img src={Logo} className="avatar" alt="image" />
                <h3>{
                    user.firstname.charAt(0).toUpperCase()
                    + user.firstname.slice(1) 
                    + " " + user.lastname.charAt(0).toUpperCase()
                    + user.lastname.slice(1)
                    }</h3>
            </div>
        </div>
        <div className="a_sidebar_bottom center_center col">
            <ul className="">
                <li className="accordion_header"><Link to="/dashboard" className="link"><GoDashboard /> Dashbord</Link></li>
                <li className="accordion_header link"><CgComponents/><Link to='/dashboard/AddComponent' > Components </Link></li>
                <ul className="accordion_body_container">
                    <div className="accordion_body">
                        <li><a href="/all-events">All Components</a></li>
                        <li><a href="/event/all/active">New Components</a></li>
                        <li><a href="/add-event">Add Components</a></li>
                    </div>
                </ul>
                <li className="accordion_header link"><MdOutlineCategory/><Link to='/dashboard/addCategory' > Catagories </Link>  </li>
                <ul className="accordion_body_container">
                    <div className="accordion_body">
                        <li><a href="/all-inactive-organizers">All Catagories</a></li>
                        <li><a href="/organizer/register">Add catagory</a></li>
                    </div>
                </ul>
                <li className="accordion_header link"><FiUsers/> Users </li>
                <ul className="accordion_body_container">
                    <div className="accordion_body">
                        <li><a href="/all-inactive-organizers">Contributers</a></li>
                        <li><a href="/organizer/register">All users</a></li>
                    </div>
                </ul>
            </ul>
        </div>
    </div>
  
  </>
}

export default AdminSidebar;