import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useAbouts = () => {
    const [about, setAbouts] = useState<any>([])
    const fetchAbouts = async () => {
        try {

            await axiosInstance.get("/abouts")
                .then((res) => {
                    setAbouts(res.data)
                })
        } catch (err) {
            throw err
        }

    }
    return { about, fetchAbouts }
}