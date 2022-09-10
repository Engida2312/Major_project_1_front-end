import React from "react";
import { Link } from "react-router-dom";
import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'
import validation from "./validation";
import { useState, useEffect } from "react";





function Editprofile(){

    const [values, setValues] = useState({
        name:"",
        email:"",
        lastname:""
    })
    const [errors, setErrors] = useState({});
    
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }
    return(
        
    <div>
       
    <div className="right">
    <h2 className="edit_h2">Edit Profile</h2>
    
        
	   		<img className="edit_img" src={Logo} alt="av"/>
            <input type="file" name="file" className="imgpic input_field_img " />

		


        <form class="form-style-1">
                
                    <label>Full Name </label>
                    <input type="text"  class="field-divided" placeholder="First" name="name" value={values.name} onChange={handleChange} /> <input type="text"  class="field-divided" placeholder="Last" name="lastname" value={values.lastname} onChange={handleChange}/>
                    {errors.name && <p className="error">{errors.name}</p>} {errors.lastname && <p className="ex">{errors.lastname}</p>}
                    
                        <label>Email </label>
                        <input type="email"  class="field-long" placeholder="nahom@email.com" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label>Linkedin Link </label>
                        <input type="email" name="field3" class="field-long" placeholder="linkedin.com/in/nahom-saketa-64970a245/"/>
                        <label>Github Link </label>
                        <input type="email" name="field3" class="field-long"placeholder=" https://github.com/Na-ak-11" />
                        
                        <button className="save btn" >Change Password</button>
                        
                        <button className="btn save" onClick={handleFormSubmit}>save</button>
         </form>



    </div>
        




      </div>  );
    }
    export default Editprofile