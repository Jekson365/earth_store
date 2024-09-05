import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useProducts = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProdcuts] = useState<any>([])
    const fetchProducts = async () => {
        try {
            await axiosInstance.get("/products")
                .then((res) => {
                    setProdcuts(res.data)
                    setLoading(false)
                })
        }
        catch (err) {
            throw err
        }
    }
    return { products, fetchProducts, loading, setProdcuts }
}