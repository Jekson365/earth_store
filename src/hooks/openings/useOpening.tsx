import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useOpening = () => {
    const [opening, setOpening] = useState<any>({})
    const getOpenings = async () => {
        await axiosInstance.get(`/openings`)
            .then((res) => {
                try {
                    console.log(res.data)
                    setOpening(res.data)
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { getOpenings,opening }
}