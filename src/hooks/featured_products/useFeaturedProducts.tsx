import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useFeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState<any>([])
    const fetchFeaturedProducts = async () => {
        try {
            await axiosInstance.get("/featured_products")
                .then((res: any) => {
                    setFeaturedProducts(res.data)
                })
        }
        catch (err) {
            throw err
        }

    }
    return { featuredProducts, fetchFeaturedProducts }
}