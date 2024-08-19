import axiosInstance from "../../AxiosInstance"

export const useCreateCustomers = () => {
    const createCustomers = async (payload: any) => {
        try {
            await axiosInstance.post('/customers', { customer: payload })
            window.location.reload()
        } catch (err) {
            throw err
        }
    }
    return { createCustomers }
}