import axiosInstance from "../../AxiosInstance"

export const useRemovePrior = () => {
    const handleRemove = async (id: Number) => {
        await axiosInstance.delete(`/priors/${id}`)
            .then(() => {
                try {
                    window.location.reload()
                }
                catch (err) {
                    throw err
                }
            })
    }
    return { handleRemove }
}