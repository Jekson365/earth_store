import { useEffect, useState } from 'react';
import { useProducts } from '../../../hooks/products/useProducts';
import '../../../styles/collection.scss';
import { defaultUrl } from '../../../AxiosInstance';
import { setItems } from '../../../custom methods/collection_methods';
import { Stack } from '@mui/material';

export default function Collection() {
    const { products, fetchProducts, loading } = useProducts()
    const [categoryItems, setCategoryItems] = useState<any>([])

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
                                                <div className="content-slider">
                                                    <Stack
                                                        direction={'column'}
                                                        gap={'15px'}
                                                        alignItems={'flex-start'}
                                                    >
                                                        <h1
                                                            className='cat-title-resp'
                                                        >{e.cat_name}</h1>
                                                        <p
                                                        
                                                            style={{color:'gray'}}
                                                        >{e.description}</p>
                                                    </Stack>
                                                </div>
                                            </div>
                                            {e.image ? (<>
                                                <img src={defaultUrl + e.image} />
                                            </>) : <>
                                                <img src={'https://blank.page/og.png'} />
                                            </>}
                                        </div>
                                    </>
                                )
                            })}
                        </>)}
                    </div>
                </div>
            </div>
        </>
    );
}
