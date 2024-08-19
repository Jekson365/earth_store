import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useCustomers = () => {
    const [customers, setCustomers] = useState([])
    const fetchCustomers = async () => {
        try {

            await axiosInstance.get('/customers')
                .then((res) => {
                    setCustomers(res.data)
                })
        }
        catch (err) {
            throw err
        }
    }
    return { customers, fetchCustomers }
}