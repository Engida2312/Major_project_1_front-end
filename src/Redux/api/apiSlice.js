

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../../Features/Auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    credentials: 'include',
    // prepareHeaders: (headers, {getState})=>{
    //     const token = getState().auth.token
    //     if(token){
    //         headers.set("authorization", `Bearer ${token}`)
    //     }
    //     return headers
    // }
})

const baseQueryWithReauth = async (args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatus === 403){
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshRsult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshRsult)
        if(refreshRsult?.data){
            const user = api.getState.auth.user
            // store the new token
            // api.dispatch(setCredentials({...refreshRsult.data, user}))
            // retry the original query with the new access token
            result = await baseQuery(args, api, extraOptions)
        }else{
            api.dispatch(logout())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder =>({})
})