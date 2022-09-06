import React from 'react'
import ComponentCard from '../Componets/componet-card'
import Logo from './../Assets/Images/avatar.png'



export const Profile = () => {
  return (
    <div>
         <div class="upper">
	   	<div class="avatar">
	   		<img class="profile_img" src={Logo} alt="av"/>

		</div>
	   	<h1 class="profile_h1">Nahom</h1>
	   	<p class="profile_p">Developer</p>

	  
		 <div class="collection">
	   	<button>Collections</button>
	   	<button>Liked Shots</button>
	   
	   </div>

	    <button class="profile_button">Edit Profile</button>
	    <div class="git">
	    	 <button class="">Github</button>
	   	<button class="">Linkedin</button>
	    </div>
	   
	</div>
	   <hr/>

   <div class="lower">
   
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
