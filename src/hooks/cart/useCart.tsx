import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCart = () => {
    const [cartItems, setCart] = useState([])
    const fetchCart = async (payload: any) => {
        console.log({cart: payload})
        try {
            await axiosInstance.post("/cart_items", { cart: payload })
                .then((res) => {
                    setCart(res.data)
                })
        }
        catch (err) {
            throw err
        }
    }
    return { cartItems, fetchCart }
}