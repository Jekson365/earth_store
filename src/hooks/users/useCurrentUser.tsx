import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCurrentUser = () => {
    const [currentUser,setCurrentUser] =  useState<any>({})
    const getCurrentUser = async (payload : any) => {
        await axiosInstance.post('/get_current_user',{token: payload})
            .then((res)=> {
                try {
                    setCurrentUser(res.data)
                }
                catch(err) {
                    throw err
                }
            })
    }
    return {getCurrentUser,currentUser}
}