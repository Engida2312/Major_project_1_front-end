import axios from "axios";
import Cookies from "js-cookie";

const API_URL_REGISTER = 'http://127.0.0.1:8000/api/register'
const API_URL_LOGIN = 'http://127.0.0.1:8000/api/login'
const API_URL_LOGOUT = 'http://127.0.0.1:8000/api/logout'
const API_URL_USERS = 'http://127.0.0.1:8000/api/users'

// register user 
const register = async(userData)=>{
    const response = await axios.post(API_URL_REGISTER, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// login user 
const login = async(userData)=>{
    const response = await axios.post(API_URL_LOGIN, userData)
    console.log(response)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// logout user 
const logout = async(userData)=>{
    try {
        const response = await axios.post(API_URL_LOGOUT, userData) 
        if(response.data){
            localStorage.removeItem('user')
            Cookies.remove('token')
        }
    } catch (error) {
        console.log(error.response)
    }
  
    return response.data
}

// all users
const allUser = async(userData)=>{
    const response = await axios.get(API_URL_USERS, userData)
    if(response.data){
        
    }
    return response.data
}
const authService ={
    register,
    login,
    logout,
    allUser,
}   

export default authService