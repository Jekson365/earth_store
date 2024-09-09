import { useState } from 'react'
import axiosInstance from '../../AxiosInstance.ts'

export const useRegister = () => {
    const [result, setResult] = useState<any>({})
    const useCreateUser = async (payload: Object) => {
        try {
            await axiosInstance.post("/create_user", { user: payload })
                .then((res)=> {
                    console.log({status: res.status})
                    setResult({status: res.status})
                })
        }
        catch (err) {
            setResult(err)
            throw err
        }
    }
    return { useCreateUser, result }
}