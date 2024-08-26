import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Box } from "@mui/material";
import { Autoplay } from "swiper/modules";

export const News = () => {

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
                    style={{ height: "100%" }}
                >
                    <SwiperSlide>
                        <img
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: "cover" }}
                            src="http://127.0.0.1:3000/uploads/product_image/image/9/pexels-mariannaole-757889.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: "cover" }}
                            src="http://127.0.0.1:3000/uploads/product_image/image/12/pexels-inspiredimages-132474.jpg" />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    )
}