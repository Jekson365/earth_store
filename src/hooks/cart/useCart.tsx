import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCart = () => {
    const [cartItems, setCart] = useState([])
    const fetchCart = async (payload : any) => {
        try {
            await axiosInstance.post("/cart_items", payload)
                .then((res) => {
                    console.log(res.data)
                    setCart(res.data)
                })
        }
        catch (err) {
            throw err
        }
    }
    return { cartItems, fetchCart }
}