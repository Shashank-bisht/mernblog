import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {URL} from '../url'
export const UserContext = createContext({})

export function UserContextProvider({children}){

    const [user, setUser] = useState(null)
    useEffect(()=>{
    getUser()
    },[])

    const getUser = async()=>{
        try{
        const res = await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        // console.log('Response Status:', res.status);
        // console.log('Response Data:', res.data);
        setUser(res.data)
        console.log(res.data)}
        catch(error){
            console.error(error)
        }
    }
    
    
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}