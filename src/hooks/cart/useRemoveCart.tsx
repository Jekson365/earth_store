import axiosInstance from "../../AxiosInstance"

export const useRemoveCart = () => {
    const removeCart = async (payload: any) => {
        try {
            await axiosInstance.post(`/destroy_cart_items`, {
                user_id: payload.user_id,
                product_id: payload.product_id
            })
        }
        catch (err) {
            throw err
        }

    }
    return { removeCart }
}