import { Grid, Box, Stack } from '@mui/material'
import '../../styles/current/currentproduct.scss'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCurrentProduct } from '../../hooks/products/useCurrentProduct'
import { defaultUrl } from '../../AxiosInstance'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useCreateCart } from '../../hooks/cart/useCreateCart'
import { CurrentUser } from '../../App'
import { CustomError } from '../../components/CustomError'
import { useTranslation } from 'react-i18next'
import { Socials } from '../../components/Socials'
import '../../styles/contact/contact.scss'
import { useContactInfo } from '../../hooks/contact_infos/useContactInfo'


export const ProductPage = () => {
    const location = useLocation()
    const { currentUser } = useContext<any>(CurrentUser)
    const { createCart } = useCreateCart()
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()
    const { contactInfos, fetchContactInfos } = useContactInfo()
    const [customError, setCustomeError] = useState({
        message: '',
        severity: ''
    })

    const applyShopStyles = () => {
        document.documentElement.style.setProperty('--nav-item-color', 'black');
    };

    useEffect(() => {
        if (location.pathname.includes('/product')) {
            applyShopStyles();
        }
    }, [location.pathname]);

    applyShopStyles();

    const handleCart = (event: React.MouseEvent) => {
        if (Object.keys(currentUser).length <= 0) {
            setOpen(true)
            setCustomeError({
                message: 'კალათით სარგებლობისთვის გაიარეთ ავტორიზაცია',
                severity: 'error'
            })
        }
        else {
            event.preventDefault();

            createCart({ product_id: product.id, user_id: currentUser.id });
            setOpen(true)
            setCustomeError({
                message: 'პროდუქტი დაემატე კალათაში',
                severity: 'success'
            })
        }
    };


    const { product, getCurrentProduct, loading } = useCurrentProduct()

    useEffect(() => {
        fetchContactInfos()
        getCurrentProduct(Number(location.pathname.split("/")[2]))
    }, [])



    return (
        <>
            <CustomError
                open={open}
                setOpen={setOpen}
                message={customError.message}
                severity={customError.severity}
            />
            <Box mt={15}></Box>
            <div className={'cover'}
            >
                <Box className={'inner-cover'}
                    p={3}
                >
                    <Grid container columnSpacing={7}>
                        <Grid item xs={12} md={6}>
                            <Box
                                maxWidth={'600px'}
                                height={'400px'}
                                overflow={'hidden'}
                            >
                                {product.product_images && product.product_images.length > 0 && (
                                    <img src={defaultUrl + product.product_images[0].image.url} />
                                )}
                            </Box>
                            <Box mt={1.3}></Box>
                            <Box
                                style={{
                                    maxWidth:"600px"
                                }}
                            >
                                {product && product.product_images && product.product_images.length > 1 ? (
                                    <>
                                        {product.product_images.length > 1 ? (
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={10}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                breakpoints={{
                                                    640: {
                                                        slidesPerView: 1,
                                                        spaceBetween: 20,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 40,
                                                    },
                                                    1024: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 10,
                                                    },
                                                }}
                                                modules={[Pagination, Autoplay]}
                                                className="mySwiper"
                                            >
                                                {product.product_images.map((e: any, index: number) => (
                                                    <SwiperSlide key={index}>
                                                        <div
                                                            style={{
                                                                width: "100%",
                                                                height: "180px",
                                                                overflow: "hidden"
                                                            }}
                                                        >
                                                            <img
                                                                style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover"
                                                                }}
                                                                src={defaultUrl + e.image.url} alt={`Slide ${index}`} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        ) : (
                                            <img
                                                src={defaultUrl + product.product_images[0].image.url}
                                                alt={product.title}
                                            />
                                        )}
                                    </>
                                ) : null}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {loading ? (<>{t('loading')}</>) : (<>
                                <Stack gap={'20px'} className={'prod-content'} mt={2}>
                                    <h2 className={'main-title'}>{product.title}</h2>
                                    <p className={'price'}>{product.price}$</p>
                                    <p className={'desc'}>{product.description}</p>
                                    <button className={'main-button'}
                                        onClick={handleCart}
                                        style={{ width: "fit-content", padding: "10px", fontSize: "15px" }}
                                    >{t('cart.add_to_cart')}
                                    </button>
                                    <p className={'currentcat'}>{t('cart.category')}: <span className={'category-title-color'}>{product.category.name}</span></p>
                                    <div className={'line'}></div>
                                    <Stack direction={'column'} alignItems={'flex-start'}>
                                        <div className='call-button'>{contactInfos && contactInfos.phone_number}</div>
                                        <Socials />
                                    </Stack>
                                </Stack>
                            </>)}
                        </Grid>
                    </Grid>
                    <Box mt={7}></Box>
                    {/* {product && product.product_images && product.product_images.length > 1 ? (
                        <>
                            {product.product_images.length > 1 ? (
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    {product.product_images.map((e: any, index: number) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                style={{
                                                    maxWidth: "500px",
                                                    height: "300px"
                                                }}

                                                src={defaultUrl + e.image.url} alt={`Slide ${index}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <img
                                    src={defaultUrl + product.product_images[0].image.url}
                                    alt={product.title}
                                />
                            )}
                        </>
                    ) : null} */}
                </Box>
            </div>
        </>
    )
}