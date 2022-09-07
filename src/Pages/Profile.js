import React from 'react'
import ComponentCard from '../Componets/componet-card'
import Logo from './../Assets/Images/avatar.png'



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

	    <button className="profile_button">Edit Profile</button>
	    <div class="git">
	    	 <button className='btn'>Github</button>
		</div>
		<div className='linkedin'>
	   	<button className='btn'>Linkedin</button>
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
