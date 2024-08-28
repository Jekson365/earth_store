import axiosInstance from "../../AxiosInstance"

export const useCreateSlider = () => {
    const createSlider = async (params: any) => {
        try {
            await axiosInstance.post("/shop_sliders", params, {
                headers: { 'Content-Type': "multipart/form-data" }
            })
            window.location.reload()
        }
        catch (err) {
            throw err
        }
    }
    return { createSlider }
}