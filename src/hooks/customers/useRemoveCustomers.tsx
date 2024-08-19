import axiosInstance from "../../AxiosInstance"

export const useRemoveCustomers = () => {
    const removeCustomers = async (id: Number) => {
        try {
            await axiosInstance.delete(`/customers/${id}`)
            window.location.reload()
        } catch (err) {
            throw err
        }
    }
    return { removeCustomers }
}