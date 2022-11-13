import React,{ useState, useEffect } from 'react'
import ComponentCard from '../Componets/componet-card'
import Logo from './../Assets/Images/avatar.png'
import { Link, useNavigate } from 'react-router-dom';
import {socialLinks} from './../Assets/Data/data'
import userEvent from '@testing-library/user-event';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import swal from 'sweetalert2';

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
   
  const [userInput,setUserInput] = useState([]);
  const [error,setError] = useState([]);
  const [userImage,setUserImage] = useState([]);
  const [loading, setLoading] = useState(true);

 // redirect to edit profile page
 const toEditProfile = ()=>{
  axios.get(`http://localhost:8000/api/editprofile/${user.id}`).then(res=>{       
    if(res.data.status === 200){
      console.log(res.data)
        setUserInput(res.data.user);
        // setUserImage(res.data.user);
        setLoading(false);
        navigate(`/Editprofile`)
    }
    else if(res.data.status === 404){
        swal("Error",res.data.message,"error");
        
    }
  })
}
        
      
  

  return (
    <div className='user_profile_container'>
			
         <div className="upper">
	   	<div className="userimage">
	   		<img className="user_img" src={Logo} alt="av"/>

		</div>
	   	<h1 className="profile_h1">{user.firstname + " " + user.lastname}</h1>
	   	<p className="profile_p">{user.role}</p>

	  
		 <div className="collection">
	   	<button className='btn'>Collections</button>
		</div>
		<div className='liked'>
	   	<button className='btn'>Liked Shots</button>
	   
	   </div>

	  
		<button className="profile_button btn" onClick={toEditProfile}>Edit Profile</button>
	   
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
