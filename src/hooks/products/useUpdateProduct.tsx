import axiosInstance from "../../AxiosInstance"

export const useUpdateProduct = () => {
    const updateProduct = async (payload: any) => {
        try {
            await axiosInstance.patch(`/products/${payload.id}`, payload)
        }
        catch (err) {
            throw err
        }
    }
    return { updateProduct }
}