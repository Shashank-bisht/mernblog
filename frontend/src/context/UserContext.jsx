import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {URL} from '../url'
import Cookies from 'js-cookie'
export const UserContext = createContext({})

export function UserContextProvider({children}){

    const [user, setUser] = useState(null)
    useEffect(()=>{
    getUser()
    },[])

    const getUser = async()=>{
        try{
        const token = Cookies.get('token')
        if(token) {
            // Set the token in the request headers
            const headers = {
              Authorization: token, // Prefix with 'Bearer' if it's not included in the token
            };
        const res = await axios.get(URL+"/api/auth/refetch",{withCredentials:true,headers:headers})
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);
        console.log(res.data)}
        }catch(error){
            console.error(error)
        }
    }
    
    
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}