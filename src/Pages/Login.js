import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import validation from "./validation";
import {toast} from 'react-toastify'
import {login, reset}  from '../Features/Auth/authSlice'
import Spinner from '../Componets/spinner'
import cookie from 'js-cookie'
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


function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: "",
    })
    //destructure the form data use state
    const {email, password} = formData
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const {user, isLoading, isError, isSuccess, message } = useSelector(
      (state)=> state.auth
    )
  
    useEffect(()=>{
      if(isError){
        toast.error(message)
      }
      
      if(isSuccess || user){
        cookie.set('token', user.token)
        navigate('/')
      }
  
      dispatch(reset())
      
    }, [user, isError, isSuccess, message, navigate, dispatch])
  
    if(isLoading){
        return <Spinner/>
    }
  
    // on change function
    const onChange = (e)=>{
      setFormData((previousState)=>({
          ...previousState,
          [e.target.name]: e.target.value,
        })
      )
    }
    // on submit function
    const onSubmit = (e)=>{
      e.preventDefault()
        const userData = {
          email,
          password,
        }
        dispatch(login(userData))
    }


    return(
        <div id="signup_body">
            <div className="signup_container">
                <div className="form-container">
                    <form onSubmit={onSubmit}  className="signup_form">
                        <div className="signup_login">
                            <p className="signup_member">Are you New Here?</p>
                            <Link id="signup_a" to="/signup">SIGNUP</Link>
                        </div>
                        <h1 id="signup_h1">  to EYN</h1>
                        <p className="signup_title">Discover The World's Top Creatives</p>
                        <div className="signup_inside">
                            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}

                            <label className="signup_label">Email</label>
                            <input 
                                className="signup_input" 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email} 
                                onChange={onChange}
                            />
                            {/* {errors.email && <p className="error">{errors.email}</p>} */}

                            <label className="signup_label">Password</label>
                            <input 
                                className="signup_input" 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}  
                                onChange={onChange} 
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
