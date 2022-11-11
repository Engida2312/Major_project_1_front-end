import axios from "axios";

// all stats
const showStats = async()=>{
    const response = await axios.get('/dashboard')
    if(response.data){
        console.log('dashboard')
        console.log(response.data)
    }
    return response.data
}

const dashboardService ={
    showStats,
}   

export default dashboardService