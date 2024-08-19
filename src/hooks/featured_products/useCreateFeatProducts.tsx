import axiosInstance from "../../AxiosInstance"

export const useCreateFeatProducts = () => {
    const createFeat = async (payload: any) => {
        try {
            await axiosInstance.post('/featured_products', { product_id: Number(payload) })
                .then(() => {
                    window.location.reload()
                    console.log('created')
                })
        }
        catch (err) {
            throw err
        }

    }
    return { createFeat }
}