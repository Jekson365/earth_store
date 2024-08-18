import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useOpening = () => {
    const [opening, setOpening] = useState<any>({})
    const getOpenings = async () => {
        await axiosInstance.get(`/openings`)
            .then((res) => {
                try {
                    setOpening(res.data)
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { getOpenings,opening }
}