import React from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import validation from "./validation";
import { useState, useEffect } from "react";
import axios from '../API/axios'

function Signup(){
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })
    const [redirect, setRedirect] = useState(false)
    const [errors, setErrors] = useState({});
    
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    
    }
    
    const navigate = useNavigate();
    const handleFormSubmit = async (event)=>{
        event.preventDefault();
        setErrors(validation(values));
        const res = await axios.post('http://127.0.0.1:8000/api/register', values)
        if(res.data.status === 200){
            console.log(res.data)
            setValues({
                name:"",
                email:"",
                password:""
            })
            // setRedirect(true)
            navigate('/login');
        }else{
            console.log('error')
        }

        if(redirect){
            console.log('djdjdk')
        }
    }

  return(
  <div>
    <body id="signup_body">
	<div className="signup_container">
	    <div className="form-container">
            <form action=""  className="signup_form">
                <div className="signup_login">
                    <p className="signup_member">Already Member?</p>
                    <Link id="signup_a" to="/login">LOGIN</Link>
                </div>
                <h1 id="signup_h1">sign up to EYN</h1>
                <p className="signup_title">Discover The World's Top Creatives</p>
                <div className="signup_inside">

                    <label className="signup_label">Name	</label><input className="signup_input" type="Name" id="name" name="name" value={values.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <label className="signup_label">Email</label><input className="signup_input" type="email" id="email" name="email" value={values.email} onChange={handleChange}  />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label className="signup_label">Password</label><input className="signup_input" type="password" id="password" name="password" value={values.password}  onChange={handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                    
                    <div class="signup_check">
                        <input id="signup_checkbox" type="checkbox" required/>
                        <label id="signup_boxagree" for="checkbox"> I agree to these <a className="termandcondition" href="#">Terms and Conditions</a>.</label>
                    </div>
                    <button id="signup_button" onClick={handleFormSubmit}>CREATE ACCOUNT</button>
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
export default Signup;
