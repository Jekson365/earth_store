import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Box } from "@mui/material";
import { Autoplay } from "swiper/modules";
import '../../styles/new.scss'
import { useSlider } from "../../hooks/shops_slider/useSlider";
import { useEffect } from "react";
import { defaultUrl } from "../../AxiosInstance";

export const News = () => {
    const { sliderImages, fetchSliders } = useSlider()

    useEffect(() => {
        fetchSliders()
    }, [])
    return (
        <>
            <Box
                height={'250px'}
                borderRadius={"10px"}
                overflow={"hidden"}
                mt={{ xs: 3, md: 0 }}
            >
                <Swiper className="mySwiper"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1500
                    }}
                    spaceBetween={20}
                    style={{ height: "100%" }}
                >
                    {sliderImages && sliderImages.map((e: any) => {
                        return (
                            <>

                                <SwiperSlide
                                    style={{ position: "relative", borderRadius: "15px", overflow: "hidden" }}
                                >
                                    <div className="news-content">
                                        <h1>{e.header}</h1>
                                    </div>
                                    <img
                                        width={'100%'}
                                        height={'100%'}
                                        style={{ objectFit: "cover" }}
                                        src={defaultUrl + e.image.url}
                                    />
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </Box>
        </>
    )
}