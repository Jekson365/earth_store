import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCurrentProduct = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState<any>([])
    const getCurrentProduct = async (id: Number) => {
        try {

            await axiosInstance.get(`/products/${id}`)
                .then((res) => {
                    setProduct(res.data)
                    setLoading(false)
                })
        } catch (err) {
            throw err
        }
    }
    return { product, getCurrentProduct, loading }
}