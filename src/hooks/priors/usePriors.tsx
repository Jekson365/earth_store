import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const UsePriors = () => {
    const [priors, setPriors] = useState([])
    const fetchPriors = async () => {
        await axiosInstance.get("/priors")
            .then((res) => {
                try {
                    setPriors(res.data)
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { priors, fetchPriors }
}