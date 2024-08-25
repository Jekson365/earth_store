import axiosInstance from "../../AxiosInstance"

export const useRemoveImage = () => {
    const removeImage = async (id: Number) => {
        try {

            await axiosInstance.post(`/remove_image/${id}`)
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return { removeImage }
}