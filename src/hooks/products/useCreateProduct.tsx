import axiosInstance from "../../AxiosInstance"

export const useCreateProduct = () => {
    const createProduct = async (payload: any) => {
        await axiosInstance.post("/products", payload ,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
    return { createProduct }
}