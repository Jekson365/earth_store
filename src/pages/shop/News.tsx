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
            {sliderImages.length > 0 ? (<>
                <Box
                    height={'250px'}
                    borderRadius={"5px"}
                    overflow={"hidden"}
                    mt={{ xs: 3, md: 0 }}
                    mb={{ xs: 0, md: 5 }}
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
                                        style={{ position: "relative", borderRadius: "5px", overflow: "hidden" }}
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
            </>) : null}
        </>
    )
}