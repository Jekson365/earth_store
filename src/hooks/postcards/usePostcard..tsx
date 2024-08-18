import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const usePostcard = () => {
    const [postcard, setPostCard] = useState<any>({})
    const getPostcard = async () => {
        await axiosInstance.get("/postcards")
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