import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import validation from "./validation";
import {useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";
// import axios from "../API/axios";
// const LOGIN_URL = 'login'
import axios from '../API/axios'
import {useNavigate} from 'react-router-dom'


function Login(){
      
    const [values, setValues] = useState({
        email:"",
        password:""
    })
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    
    }
    const handleFormSubmit= async(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login',
            JSON.stringify({email: values.email, password: values.password}),
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials: true
            }); 
            
            console.log(response.data.message + ' ss')
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            // setAuth({email, password, roles, accessToken})
            setValues({
                email:"",
                password:""
            })
            navigate('/');

        }catch(err){
            if(!err?.response){
                setErrors('No server Response');
            }else if(err.response?.status === 400){
                setErrors('Missing Username or Passwod')
            }else if(err.response?.status === 401){
                setErrors('Unauthorized');

            }else{
                setErrors('Login failed');
            }
        }
       
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
                    
                    <Link id="passforget" to="">Forgot Password?</Link>
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
