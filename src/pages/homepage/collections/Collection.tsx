import { useEffect, useState } from 'react';
import { useProducts } from '../../../hooks/products/useProducts';
import '../../../styles/collection.scss';
import { defaultUrl } from '../../../AxiosInstance';
import { setItems } from '../../../custom methods/collection_methods';
import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Collection() {
    const { products, fetchProducts, loading } = useProducts()
    const [categoryItems, setCategoryItems] = useState<any>([])
    const { t } = useTranslation()

    useEffect(() => {
        fetchProducts()
    }, [])


    useEffect(() => {
        setCategoryItems(
            setItems(products, loading)
        )
    }, [loading])

    return (
        <>
            <div className='main-col-cover'>
                <div className="inner-cover">
                    <div className="custom-container">
                        {loading ? (<>laoding...</>) : (<>
                            {categoryItems && categoryItems.map((e: any) => {
                                return (
                                    <>
                                        <div className="div1">

                                            <div className="inner-slider">
                                                <div className="content-slider"
                                                    style={{ height: "100%" }}
                                                >
                                                    <Stack
                                                        direction={'column'}
                                                        gap={'15px'}
                                                        alignItems={'flex-start'}
                                                        height={'90%'}
                                                        justifyItems={'space'}
                                                    >
                                                        <Box
                                                            height={'100%'}
                                                        >
                                                            <h1
                                                                className='cat-title-resp'
                                                            >{e.cat_name}</h1>
                                                            <p

                                                                style={{ color: 'gray' }}
                                                            >{e.description}</p>
                                                        </Box>
                                                        <Box
                                                        >
                                                            <button className='admin-button'
                                                                style={{ fontSize: "13px", borderRadius: "8px" }}
                                                            >
                                                                <Link to={'/shop'}>
                                                                    {t('shops.products')}
                                                                </Link>
                                                            </button>
                                                        </Box>
                                                    </Stack>
                                                </div>
                                            </div>
                                            {e.image ? (<>
                                                <img src={defaultUrl + e.image} />
                                            </>) : <>
                                                <img src={'https://blank.page/og.png'} />
                                            </>}
                                        </div >
                                    </>
                                )
                            })}
                        </>)}
                    </div>
                </div>
            </div >
        </>
    );
}
