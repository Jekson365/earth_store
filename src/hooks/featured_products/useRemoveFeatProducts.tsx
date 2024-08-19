import axiosInstance from "../../AxiosInstance"

export const useRemoveFeatProducts = () => {
    const removeFeat = async (id: Number) => {
        try {

            await axiosInstance.delete(`/featured_products/${id}`)
            .then(() => {
                console.log(id)
                console.log("deleted")
            })
            window.location.reload()
        }
        catch(err) {
            throw err
        }
    }
    return { removeFeat }
}