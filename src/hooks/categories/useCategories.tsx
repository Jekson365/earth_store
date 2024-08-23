import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCategories = () => {
    const [categories, setCategories] = useState<any>()
    const [catCounted, setCatCounted] = useState([])
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
    const fetchCatsByCount = async () => {
        await axiosInstance.get("/categories_count")
            .then((res) => {
                try {
                    setCatCounted(res.data)
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { categories, fetchCategories, fetchCatsByCount, catCounted }
}