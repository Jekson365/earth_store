import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useContactInfo = () => {
    const [contactInfos, setContactInfos] = useState<any>([])
    const fetchContactInfos = async () => {
        try {

            await axiosInstance.get("/contact_infos")
                .then((res) => {
                    setContactInfos(res.data)
                })
        }
        catch (err) {
            throw err
        }

    }
    return { contactInfos, fetchContactInfos }
}