import axiosInstance from "../../AxiosInstance"

export const useCreateSocial = () => {
    const createSocial = async (params: any) => {
        try {
            await axiosInstance.post("/socials", params)
        }
        catch (err) {
            throw err
        }
    }
    return { createSocial }
}