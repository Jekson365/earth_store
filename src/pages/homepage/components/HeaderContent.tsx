import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { defaultUrl } from "../../../AxiosInstance";


interface HeaderContentProps {
    title: String;
    desc: String;
    height: any,
    mainPage: boolean,
    opening_images: any,
    slider: boolean
}

export const HeaderContent: React.FC<HeaderContentProps> = ({ title, desc, height, mainPage, opening_images, slider }) => {
    return (
        <>
            <div className={'section'}
                style={{
                    height: height,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative"
                }}
            >
                <div className="slider">
                    {!slider && opening_images ? (<>
                        <div className="overlay"
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.5)'
                            }}
                        ></div>
                        <img src={opening_images.length > 0 ? defaultUrl + opening_images[0].image.url : ''} />
                    </>) : (<>
                        <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectFade, Pagination]}
                            className="mySwiper"
                            style={{
                                height: "100%"
                            }}
                        >
                            {opening_images && opening_images.map((e: any) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className="overlay"
                                                style={{
                                                    backgroundColor: 'rgba(0,0,0,0.5)'
                                                }}
                                            ></div>
                                            <img src={defaultUrl + `${e.image.url}`}
                                                width={'100%'}
                                                height={'100%'}
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </SwiperSlide>
                                    </>
                                )
                            })}
                        </Swiper>
                    </>)}
                </div>
                <div className={'inner-section'}

                >
                    <Stack
                        direction={"column"}
                        alignItems={'center'}
                        justifyContent={'center'}
                        className={'opening-data'}
                        gap={'10px'}
                    >
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography className={'title main-title-color'}>{title}</Typography>
                            {mainPage ? <Typography className={'min-title main-subtitle-color'}>{desc}</Typography> : null}
                        </Stack>
                        {mainPage ? <button className={'main-button'}
                        ><Link to={'/shop'}
                            style={{ color: "white" }}
                        >SHOP NOW</Link></button> : null}
                    </Stack>
                </div>
            </div>
        </>
    )
}
