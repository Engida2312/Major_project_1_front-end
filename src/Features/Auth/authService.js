import axios from "axios"
// register user 
const register = async(userData)=>{
    const response = await axios.post('/register', userData)
    const content = JSON.stringify(response.data)
    console.log(content)
    return content
}

// login user 
const login = async(userData)=>{
    const email = userData.email
    const password = userData.password
    const res = await axios.post('/login', {email, password});

    return res.data
}

// logout user 
const logout = async()=>{
    axios.post('/logout').then((res) => {
        console.log(res.data)
        return res.data
    }).catch((err)=>{
        console.log(err)
    });
}

// user 
const userInfo = async()=>{
    const response = await axios.get('/user')
    console.log(response.data)
    if(response.data){
        // localStorage.setItem('userInfo', JSON.stringify(response.data))
    }
    return response.data
}

//updateprofile
const update = async(userData)=>{
    const response = await axios.post('/updateprofile', userData)
    const content = JSON.stringify(response.data)
    console.log(content)
    return content
}

export function saveUserInLocalStorage(userData){
    
    localStorage.setItem('user', JSON.stringify(userData))
}

const authService ={
    register,
    login,
    logout,
    userInfo,
    update,
}   

export default authService