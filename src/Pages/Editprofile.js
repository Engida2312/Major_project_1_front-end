import React from "react";
import { Link } from "react-router-dom";
import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'
import validation from "./validation";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert2';
import {useSelector, useDispatch} from 'react-redux'
import { userUpdate } from "../Features/updateSlice";


function Editprofile (){
    const {user} = useSelector((state)=> state.auth)
  
   
    
    
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [linkedin, setLinkedin] = useState(user.linkedin);
    const [github, setGithub] = useState(user.github);
    const [error, setError] = useState(null);

    

    
    const handleInput = (e) =>{
        e.persist();
        setFirstname({...firstname,[e.target.name]:e.target.value})
        setLastname({...lastname,[e.target.name]:e.target.value})
        setEmail({...email,[e.target.name]:e.target.value})
        setGithub({...github,[e.target.name]:e.target.value})
        setLinkedin({...linkedin,[e.target.name]:e.target.value})

    }

const updateUser = (e) =>{
   
  e.preventDefault();
  swal({
      Title:"Confirmation",
      text: "Confirm to Update Profile Data",
      buttons: {           
          confirm: {
              text: "Confirm",
              value: true,
          },
          cancel:"Cancel",
      },
      icon: "info",
    }).then((value) => {
      if(value === true){
        //   const user_id = props.match.params.id;
          const userData = new FormData();   

        //   userData.append('uimage',userImage.uimage);
          userData.append('firstname',user.firstname);
          userData.append('lastname',user.lastname);
          userData.append('email',user.email);
          userData.append('github',user.github);
          userData.append('linkedin',user.linkedin);

          axios.post(`http://localhost:8000/api/updateprofile/${user.id}`, userData).then(res=>{
              if(res.data.status === 200){
                  swal("Success",res.data.message,"success");
                  setError([]);
              }
              else if(res.data.status === 404){
                  swal("Error",res.data.message,"error");
              }
          });
      }
  });
}

    return(
        
    <div> 
       
    <div className="right">
    <h2 className="edit_h2">Edit Profile</h2>
    
    <form className="form-style-1" onSubmit={updateUser}>

	   		<img src="" alt="" className="edit_img"  name="uimage"/>
            <input type="file" name="avatar" id="avatar" className="imgpic input_field_img " />

            <label>Full Name </label>
            <input type="text"  className="field-divided" placeholder="First" name="firstname" onChange={handleInput} value={user.firstname} />
             <input type="text"  className="field-divided" placeholder="Last" name="lastname" onChange={handleInput} value={user.lastname}/>
            
            
            <label>Email </label>
            <input type="email"  className="field-long" name="email"value={user.email} />
            

            <label>Linkedin Link </label>
            <input type="text" name="linkedin" className="field-long" onChange={handleInput} value={user.linkedin}/>
            <label>Github Link </label>
            <input type="text" name="github" className="field-long" onChange={handleInput} value={user.github}/>
            
            <button className="save btn" >Change Password</button>
            
            <button className="btn save" >save change</button>
         </form>
      </div>
  </div>  );
}
export default Editprofile