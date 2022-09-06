import React from "react";
import { Link } from 'react-router-dom';
import validation from "./validation";
import { useState, useEffect } from "react";


function Login(){
    const [values, setValues] = useState({
        
        email:"",
        password:""
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
    <body id="signup_body">
	<div className="signup_container">
	    <div className="form-container">
            <form action="" className="signup_form">
                <div className="signup_login">
                    <p className="signup_member">Are you New Here?</p>
                    <Link id="signup_a" to="/signup">SIGNUP</Link>
                </div>
                <h1 id="signup_h1">Login to EYN</h1>
                <p className="signup_title">Discover The World's Top Creatives</p>
                <div className="signup_inside">
                    
                    <label className="signup_label">Email</label><input className="signup_input" type="email" id="email" name="email" value={values.email} onChange={handleChange}  />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label className="signup_label">Password</label><input className="signup_input" type="password" id="password" name="password" value={values.password}  onChange={handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                    
                    
                    <button id="signup_button" onClick={handleFormSubmit}>LOGIN</button>
                </div>
		    </form>
        </div>
        <div className="sign_up_right">
             <h1 id="signup_h1">Welcome To EYN!</h1>
        </div>
    </div>
    </body>

</div>

  );
}
export default Login;
