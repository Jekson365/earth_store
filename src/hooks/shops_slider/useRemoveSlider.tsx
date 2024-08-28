import axiosInstance from "../../AxiosInstance"

export const useRemoveSlider = () => {
    const removeSlider = async (id: Number) => {
        try {
            await axiosInstance.delete(`/shop_sliders/${id}`)
        } catch (err) {
            throw err
        }
    }
    return { removeSlider }
}