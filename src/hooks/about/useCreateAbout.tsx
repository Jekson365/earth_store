import axiosInstance from "../../AxiosInstance"

export const useCreateAbout = () => {
    const createAbout = async (payload: any) => {
        try {
            axiosInstance.post("/abouts", payload, { headers: { 'Content-Type': 'multipart/form-data', } })
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return { createAbout }
}