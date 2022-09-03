import '../../Assets/Styles/admin-sidebar.css'
import SearchBar from "../../Componets/search-bar";

import Logo from '../../Assets/Images/avatar.png'
const AdminSidebar = ()=>{
  return <>

    <nav className="flex justify_content_sb align_items_c admin_top_nav">
        <SearchBar/>
        <a className="btn">Logout</a>
    </nav>
    <div className="a_sidebar_container">
        <div className="a_sidebar_top">
            <div className="col center_center m-2">
                <img src={Logo} className="avatar" alt="image" />
                <h3>Admin</h3>
            </div>
        </div>
        <div className="a_sidebar_bottom center_center col">
            <ul className='items_container'>
                <li className='item'>Dahsboard</li>
                <li className='item'>Dahsboard</li>
                <li className='item'>Dahsboard</li>
            </ul>
        </div>
    </div>
  
  </>
}

export default AdminSidebar;