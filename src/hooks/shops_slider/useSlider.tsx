import { useState } from "react"
import axiosInstance from "../../AxiosInstance"

export const useSlider = () => {
    const [sliderImages, setSliderImages] = useState([])
    const fetchSliders = async () => {
        try {

            await axiosInstance.get("/shop_sliders")
                .then((res: any) => {
                    setSliderImages(res.data)
                })
        }
        catch (err) {
            throw err
        }

    }
    return { sliderImages, fetchSliders }
}   
