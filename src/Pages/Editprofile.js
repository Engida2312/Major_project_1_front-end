import React from "react";
import { Link } from "react-router-dom";
import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'
import validation from "./validation";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import {useSelector, useDispatch} from 'react-redux'

function Editprofile (props){
    const {user} = useSelector((state)=> state.auth)

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    
    // const [user,setUserInput] = useState([]);
    const [error,setError] = useState([]);
    const [userImage,setUserImage] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const handleInput = (e) =>{
        e.persist();
        // setUserInput({...user,[e.target.name]:e.target.value})
    }

//     useEffect(()=>{
//     // const user_id = props.match.params.id;
//     axios.get(`http://localhost:8000/api/editprofile/${user_id}`).then(res=>{
        
//         if(res.data.status === 200){
//             setUserInput(res.data.user);
//             setUserImage(res.data.user);
//             setLoading(false);

//         }
//         else if(res.data.status === 404){
//             swal("Error",res.data.message,"error");
            
//         }
        
      
// }
// )});


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

	   		<img src={file} alt={userImage.uimage} className="edit_img" onChange={handleChange} name="uimage"/>
            <input type="file" name="avatar" id="avatar" className="imgpic input_field_img " onChange={handleInput} value={userImage.uimage}/>

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