import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCreateProduct = () => {
    const [loading, setLoading] = useState(true)
    const createProduct = async (payload: any) => {
        try {
            await axiosInstance.post("/products", payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            setLoading(false)
        } catch (err) {
            throw err
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, createProduct }
}