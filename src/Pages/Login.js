import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import {useRef, useState, useEffect, useContext } from "react";

// import validation from "./validation";
// import AuthContext from "../Context/AuthProvider";

// import axios from '../API/axios'
// import {useNavigate} from 'react-router-dom'


// function Login(){
      
//     const [values, setValues] = useState({
//         email:"",
//         password:""
//     })
//     const [errors, setErrors] = useState({});
    
//     const navigate = useNavigate();
//     const handleChange=(event)=>{
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value,
//         })
    
//     }
//     const handleFormSubmit= async(event)=>{
//         event.preventDefault();
//         setErrors(validation(values));
        
//         try{
//             const response = await axios.post('http://127.0.0.1:8000/api/login',
//             JSON.stringify({email: values.email, password: values.password}),
//             {
//                 headers:{'Content-Type': 'application/json'},
//                 withCredentials: true
//             }); 
            
//             console.log(response.data.message + ' ss')
//             // const accessToken = response?.data?.accessToken;
//             // const roles = response?.data?.roles;
//             // setAuth({email, password, roles, accessToken})
//             setValues({
//                 email:"",
//                 password:""
//             })
//             navigate('/');

//         }catch(err){
//             if(!err?.response){
//                 setErrors('No server Response');
//             }else if(err.response?.status === 400){
//                 setErrors('Missing Username or Passwod')
//             }else if(err.response?.status === 401){
//                 setErrors('Unauthorized');

//             }else{
//                 setErrors('Login failed');
//             }
//         }
       
//     }


import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/Auth/authSlice";
import { useLoginMutation } from "../Features/Auth/authApiSlice";

const Login = ()=>{
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        // useRef.current.focus()
    }, [])

    useEffect(()=>{
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(user, pwd)
        try{
            const userData = await login({user, pwd}).unwrap()
            console.log(userData)
            dispatch(setCredentials({...userData, user}))
            setUser('')
            setPwd('')
            navigate('/')
        }catch(err){
            if(!err?.response){
                setErrMsg('No Server response')
            }else if(err.response?.status === 400 ){
                setErrMsg('Missing Username or password')
            }else if(err.response?.status === 401){
                setErrMsg('Unauthorized')
            }else{
                setErrMsg('Login failed')
            }
            errRef.current.focus();
        }
    }

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()


    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    return(
        <div id="signup_body">
            <div className="signup_container">
                <div className="form-container">
                    <form action="" className="signup_form" onSubmit={handleSubmit}>
                        <div className="signup_login">
                            <p className="signup_member">Are you New Here?</p>
                            <Link id="signup_a" to="/signup">SIGNUP</Link>
                        </div>
                        <h1 id="signup_h1">  to EYN</h1>
                        <p className="signup_title">Discover The World's Top Creatives</p>
                        <div className="signup_inside">
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                            <label className="signup_label">Email</label>
                            <input
                                className="signup_input" 
                                type="email"
                                id="email" 
                                // name="email"
                                ref={userRef}
                                value={user}
                                onChange={handleUserInput}  
                                required
                                />
                            {/* {errors.email && <p className="error">{errors.email}</p>} */}

                            <label className="signup_label">Password</label>
                            <input 
                                className="signup_input" 
                                type="password" 
                                id="password" 
                                value={pwd}
                                // name="password" 
                                onChange={handlePwdInput} 
                                required
                                />
                            {/* {errors.password && <p className="error">{errors.password}</p>} */}
                            
                            <Link id="passforget" to="">Forgot Password?</Link>
                            {/* <button id="signup_button" onClick={handleFormSubmit}>LOGIN</button> */}
                            <button id="signup_button">LOGIN</button>
                        </div>
                    </form>
                </div>
                <div className="sign_up_right">
                    <h1 id="signup_h1">Welcome To EYN!</h1>
                </div>
            </div>
        </div>
    );
}
export default Login;
