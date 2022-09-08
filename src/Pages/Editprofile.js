import React from "react";
import { Link } from "react-router-dom";

import {GoDashboard} from 'react-icons/go'
import {CgComponents} from 'react-icons/cg'
import {MdOutlineCategory} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'

import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'




function Editprofile(){
    return(<div>
       
       
    <div className="a_sidebar_container">
        
        <div className="a_sidebar_bottom center_center col">
            <ul className="">
            <li className="accordion_header link"><Link to="/editprofile" className="link"> Edit Profile</Link> </li>
                <li className="accordion_header"><Link to="" className="link"> Home</Link></li>
                <li className="accordion_header link"><Link to="/components" className="link"> Components</Link></li>
                
                <li className="accordion_header link"><Link to="/profile" className="link">Profile </Link></li>
                
               
                
            </ul>
        </div>
    </div>
    

    <div className="right">
    <h2 className="edit_h2">Edit Profile</h2>
    
        
	   		<img className="edit_img" src={Logo} alt="av"/>
            <input type="file" name="file" className="imgpic" />

		
        <form className="edit_form">
            
        <fieldset className="edit_fieldset">
        <label >First Name: <input type="text" name="first-name" className="input_field" /></label>
        <label>Last Name: <input type="text" name="last-name" className="input_field" /></label>
        <label> Email: <input type="email" name="email" className="input_field" /></label>
        <label> Linkedin Link: <input type="link" name="lin" className="input_field" /></label>
        <label> Github Link: <input type="link" name="git" className="input_field" /></label>
        
      </fieldset>
      <input type="submit" value="Save" className="btn save"/>
      
      
        </form>



    </div>
        




      </div>  );
    }
    export default Editprofile