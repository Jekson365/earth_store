import axiosInstance from "../../AxiosInstance"

export const useCreateProduct = () => {
    const createProduct = async (payload: any) => {
        try {

            await axiosInstance.post("/products", payload ,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
        }catch(err) {
            throw err
        }
    }
    return { createProduct }
}