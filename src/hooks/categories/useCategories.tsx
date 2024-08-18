import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCategories = () => {
    const [categories, setCategories] = useState<any>()
    const fetchCategories = async () => {
        await axiosInstance.get("/categories")
            .then((res) => {
                try {
                    setCategories(res.data)
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { categories, fetchCategories }
}