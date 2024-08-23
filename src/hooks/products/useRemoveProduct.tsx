import axiosInstance from "../../AxiosInstance"

export const useRemoveProduct = () => {
    const removeProduct = async (id: Number) => {
        try {
            await axiosInstance.delete(`/products/${id}`)
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return { removeProduct }
}