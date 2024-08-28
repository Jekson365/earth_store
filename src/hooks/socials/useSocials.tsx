import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useSocials = () => {
    const [social, setSocail] = useState<any>([])
    const fetchSocial = async () => {
        try {

            await axiosInstance.get("/socials")
                .then((res: any) => {
                    setSocail(res.data)
                })
        }
        catch (err) {
            throw err
        }
    }
    return { fetchSocial, social }
}