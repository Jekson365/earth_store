import axiosInstance from "../../AxiosInstance"

export const useCreateCart = () => {
    const createCart = async (payload: any) => {
        try {
            await axiosInstance.post("/carts", payload)
        }
        catch (err) {
            throw err
        }
    }

    return { createCart }
}