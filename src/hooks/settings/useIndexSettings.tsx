import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useIndexSettings = () => {
    const [settings, setSettings] = useState<any>([])
    const fetchSettings = async () => {
        try {
            await axiosInstance.get("/settings")
                .then((res: any) => {
                    setSettings(res.data)
                })
        } catch (err) {
            throw err
        }
    }
    return { settings, fetchSettings }
}