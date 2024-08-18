import axiosInstance from "../../AxiosInstance"

export const useRemoveAbout = () => {
    const removeAbout = async (id: Number) => {
        try {

            await axiosInstance.delete(`/abouts/${id}`)
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return { removeAbout }
}