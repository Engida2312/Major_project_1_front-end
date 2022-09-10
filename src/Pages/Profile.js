import React from 'react'
import ComponentCard from '../Componets/componet-card'
import Logo from './../Assets/Images/avatar.png'
import { Link } from 'react-router-dom';
import {socialLinks} from './../Assets/Data/data'



export const Profile = () => {
  return (
    <div>
			
         <div className="upper">
	   	<div className="avatar">
	   		<img className="profile_img" src={Logo} alt="av"/>

		</div>
	   	<h1 className="profile_h1">Nahom</h1>
	   	<p className="profile_p">Developer</p>

	  
		 <div className="collection">
	   	<button className='btn'>Collections</button>
		</div>
		<div className='liked'>
	   	<button className='btn'>Liked Shots</button>
	   
	   </div>

	    
		<Link to="/editprofile"><button className="profile_button btn">Edit Profile</button></Link>
	   
		<div className="social_links social_profile">
		<ul>
	    {
             socialLinks.map((link)=>{
                 return(
                <li key={link.id}><a target={'_blank'} className="icon" href={link.url}> {link.icon}</a></li>
                 )
            })
    	 }
		 </ul>
		 </div>
	</div>
	   <hr/>

   <div className="lower">
   
   <section>
                <div className="cards_container margin_top_4 margin_section">
                    <ComponentCard/>
                    <ComponentCard/>
                    <ComponentCard/>
                    <ComponentCard/>
                </div>
            </section>
   	
   </div>
    </div>
  )
}
