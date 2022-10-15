import React from "react";
import { Link } from "react-router-dom";
import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'
import validation from "./validation";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert2';
import {useSelector, useDispatch} from 'react-redux'

function Editprofile (props){
    const {user} = useSelector((state)=> state.auth)

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    
    const [newuser,setUserInput] = useState({
        firstname: user.firstname,
        lastname:user.lastname,
        email: user.email,
        github:user.github,
        linkedin:user.linkedin,
    });
    const [error,setError] = useState([]);
    const [userImage,setUserImage] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const handleInput = (e) =>{
        setUserInput({...newuser,[e.target.name]:e.target.value})
    }

const updateUser = (e) =>{
   
  e.preventDefault();
//   swal({
//       Title:"Confirmation",
//       text: "Confirm to Update Profile Data",
//       buttons: {           
//           confirm: {
//               text: "Confirm",
//               value: true,
//           },
//           cancel:"Cancel",
//       },
//       icon: "info",
//     }).then((value) => {
    //   if(value === true){
        //   const user_id = props.match.params.id;
          const userData = new FormData();   

        //   userData.append('uimage',userImage.uimage);
          userData.append('firstname',newuser.firstname);
          userData.append('lastname',newuser.lastname);
          userData.append('email',newuser.email);
        //   userData.append('github',newuser.github);
        //   userData.append('linkedin',newuser.linkedin);

          axios.post(`http://localhost:8000/api/updateprofile/${user.id}`, userData).then(res=>{
              if(res.data.status === 200){
                  swal("Success",res.data.message,"success");
                  setError([]);
              }
              
              else if(res.data.status === 404){
                  swal("Error",res.data.message,"error");
              }
          });
    //   }
//   });
}

    return(
        
    <div> 
       
    <div className="right">
    <h2 className="edit_h2">Edit Profile</h2>
    
    <form className="form-style-1" onSubmit={updateUser}>

	   		<img src={file} alt={userImage.uimage} className="edit_img" onChange={handleChange} name="uimage"/>
            {/* <input type="file" name="avatar" id="avatar" className="imgpic input_field_img " onChange={handleInput} value={userImage.uimage}/> */}

            <label>Full Name </label>
            <input type="text"  className="field-divided" placeholder="First" name="firstname" onChange={handleInput} value={newuser.firstname} />
             <input type="text"  className="field-divided" placeholder="Last" name="lastname" onChange={handleInput} value={newuser.lastname}/>
            
            
            <label>Email </label>
            <input type="email"  className="field-long" onChange={handleInput} name="email"value={newuser.email} />
            

            {/* <label>Linkedin Link </label>
            <input type="text" name="linkedin" className="field-long" onChange={handleInput} value={newuser.linkedin}/>
            <label>Github Link </label>
            <input type="text" name="github" className="field-long" onChange={handleInput} value={newuser.github}/> */}
            
            <button className="save btn" >Change Password</button>
            
            <button className="btn save" >save change</button>
         </form>
      </div>
  </div>  );
}
export default Editprofile