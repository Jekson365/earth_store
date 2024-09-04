import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const usePostcard = () => {
    const [postcard, setPostCard] = useState<any>({})
    const [currentLan] = useState(JSON.parse(localStorage.getItem('lang') || '{}'))
    const getPostcard = async () => {
        await axiosInstance.get(`/postcards/${currentLan}`)
            .then((res) => {
                try {
                    setPostCard(res.data)
                }
                catch (err) {
                    throw (err)
                }
            })
    }
    return { getPostcard, postcard }
}