import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useFeaturedProducts } from "../../../hooks/featured_products/useFeaturedProducts";
import { defaultUrl } from "../../../AxiosInstance";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export const Featured = () => {
    const { featuredProducts, fetchFeaturedProducts } = useFeaturedProducts()
    const { t } = useTranslation()
    const [sliderPerView] = useState<any>(JSON.parse(localStorage.getItem('slider_per_view') || '3'))


    useEffect(() => {
        fetchFeaturedProducts()
    }, [])
    return (
        <>
            <section className={'featured-section'}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginTop: "50px",
                    padding: "0 7px",
                }}>
                <div className={'inner-section'}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "10px"
                    }}
                >
                    <Stack>
                        <Typography
                            className="section-title"
                            style={{
                                fontSize: "30px"
                            }}
                        >{t('featured.featured_items')}</Typography>
                    </Stack>
                    <Box mt={2}></Box>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1124: {
                                slidesPerView: sliderPerView,
                                spaceBetween: 20,
                            },
                        }}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {featuredProducts && featuredProducts.map((e: any) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <Link to={`/product/${e.product.id}`}>
                                            <Box
                                                className='featured-item'
                                                sx={{
                                                    maxWidth: "600px",
                                                    paddingBottom: "100%",
                                                    backgroundImage: `url('${e.product.product_images ? defaultUrl + e.product.product_images[0].image.url : null}')`,
                                                    backgroundSize: "cover"
                                                }}
                                            >
                                                <div className={`price-box ${e.product.sale_price != null ? 'old-price' : null}`}>
                                                    {e.product.price}$
                                                </div>
                                                {e.product.sale_price != null ? (<>
                                                    <div className="sale-box">{e.product.sale_price}$</div>
                                                </>) : null}
                                            </Box>
                                        </Link>
                                    </SwiperSlide>
                                </>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    );
};
