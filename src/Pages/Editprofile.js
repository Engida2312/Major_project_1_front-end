import React from "react";
import { Link } from "react-router-dom";
import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'
import validation from "./validation";
import { useState, useEffect } from "react";
import axios from "axios";
import Axios from "axios";
import swal from 'sweetalert';




function Editprofile (props){

  
  const [userInput,setUserInput] = useState([]);
  const [error,setError] = useState([]);
  const [userImage,setUserImage] = useState([]);

 
  const handleInput = (e) =>{
    e.persist();
    setUserInput({...userInput,[e.target.name]:e.target.value})
}

useEffect(()=>{
 const id = props.match.params.id;
  axios.get(`http://localhost:8000/api/editprofile/{id}`).then(res=>{
    
      if(res.data.status === 200){
          setUserInput(res.data.user);
          setUserImage(res.data.user);

      }
      else if(res.data.status === 404){
          swal("Error",res.data.message,"error");
          
      }
        
      
}
)});


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
          const id = props.match.params.id;
          const userData = new FormData();   

          userData.append('uimage',userImage.uimage);
          userData.append('firstname',userInput.firstname);
          userData.append('lastname',userInput.lastname);
          userData.append('email',userInput.email);
          userData.append('github',userInput.github);
          userData.append('linkedin',userInput.linkedin);

          axios.post(`http://localhost:8000/api/updateprofile/{id}`, userData).then(res=>{
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
 

const [file, setFile] = useState();
function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
   
    return(
        
    <div> 
       
    <div className="right">
    <h2 className="edit_h2">Edit Profile</h2>
    
    <form class="form-style-1" >

	   		<img src={file} alt={userImage.uimage} width="100px" height="100px" className="edit_img" onChange={handleChange}/>
            <input type="file" name="avatar" id="avatar" className="imgpic input_field_img " onChange={handleInput} value={userImage.uimage}/>

		


       
                
                    <label>Full Name </label>
                    <input type="text"  class="field-divided" placeholder="First" name="name" onChange={handleInput} value={userInput.firstname} /> <input type="text"  class="field-divided" placeholder="Last" name="lastname" onChange={handleInput} value={userInput.lastname}/>
                    
                    
                        <label>Email </label>
                        <input type="email"  class="field-long" name="email" />
                        

                        <label>Linkedin Link </label>
                        <input type="email" name="field3" class="field-long" onChange={handleInput} value={userInput.linkedin}/>
                        <label>Github Link </label>
                        <input type="email" name="field3" class="field-long" onChange={handleInput} value={userInput.github}/>
                        
                        <button className="save btn" >Change Password</button>
                        
                        <button className="btn save"  onClick={updateUser}>save change</button>
         </form>



    </div>
        




      </div>  );
    }
    export default Editprofile