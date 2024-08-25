import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useFeaturedProducts } from "../../../hooks/featured_products/useFeaturedProducts";
import { defaultUrl } from "../../../AxiosInstance";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';

export const Featured = () => {
    const { featuredProducts, fetchFeaturedProducts } = useFeaturedProducts()
    useEffect(() => {
        fetchFeaturedProducts()
        console.log(featuredProducts)
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
                        >Featured Items</Typography>
                    </Stack>
                    <Box mt={2}></Box>
                    <Swiper
                        // slidesPerView={3}
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
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
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
                                                    minWidth: "300px",
                                                    height: "500px",
                                                    backgroundImage: `url('${e.product.product_images ? defaultUrl + e.product.product_images[0].image.url : null}')`,
                                                    backgroundSize: "cover"
                                                }}
                                            ></Box>
                                        </Link>
                                    </SwiperSlide>
                                </>
                            )
                        })}
                    </Swiper>


                    {/* <Grid container columnSpacing={1} rowSpacing={1}>
                        {featuredProducts && featuredProducts.map((e: any, index: number) => {
                            return (
                                <Grid item xs={12} md={4} key={index}>
                                    <Link to={`/product/${e.product.id}`}>
                                        <Stack direction={'column'} alignItems={'flex-start'} gap={'10px'}>
                                            <Box
                                                className={'featured-item'}
                                                sx={{
                                                    width: '100%', // Ensures the box takes full width
                                                    paddingTop: '120%', // This makes the box square by setting height equal to width
                                                    position: 'relative', // Needed to position the image inside the square
                                                    margin: '0 auto',
                                                }}
                                            >
                                                <img
                                                    src={defaultUrl + e.product.product_images[0].image.url}
                                                    alt={e.product.title}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover', // Ensures the image covers the box while maintaining its aspect ratio
                                                        borderRadius: '8px',
                                                    }}
                                                />
                                            </Box>
                                            <Stack
                                                direction={'column'}
                                                alignItems={'flex-start'}
                                                gap={'5px'}
                                                pl={2}
                                                className={'feat-content'}
                                            >
                                                <Typography className={'cat'}>{e.product.category.name}</Typography>
                                                <Typography className={'title'}>{e.product.title}</Typography>
                                                <Typography className={'price'}>${e.product.price}</Typography>
                                            </Stack>
                                        </Stack>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid> */}
                </div>

            </section>
        </>
    );
};
