import { Box, Grid, Stack, Typography } from "@mui/material";
import '../../styles/shop/shop.scss'
import { useLocation } from 'react-router-dom'
import { useProducts } from "../../hooks/products/useProducts";
import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/categories/useCategories";
import CloseIcon from '@mui/icons-material/Close';
import { ShopItem } from "./ShopItem";
import { News } from "./News";
import { useTranslation } from "react-i18next";
import FourBlock from '../../../public/shop/four_block.svg'
import TwoBlock from '../../../public/shop/f.svg'
import OneBlock from '../../../public/shop/three.svg'
import { useIndexSettings } from "../../hooks/settings/useIndexSettings";

export const Shop = () => {
    const { products, fetchProducts, loading } = useProducts()
    const [filterdProducts, setFilteredProducts] = useState([])
    const { t } = useTranslation()
    const [selectedCat, setSelectedCat] = useState<Number | null>(null)
    const location = useLocation()
    const { settings, fetchSettings } = useIndexSettings()

    useEffect(() => {
        fetchSettings()
    }, [])

    const isSettingEnabled = (paramName: string) => {
        const setting = settings.find((s: any) => s.param_name === paramName)
        return setting ? setting.status : false
    }
    
    useEffect(() => {
        fetchProducts()
    }, [])
    useEffect(() => {
        setFilteredProducts(products)
    }, [products])
    const applyShopStyles = () => {
        document.documentElement.style.setProperty('--nav-item-color', 'black');
    };

    useEffect(() => {
        if (location.pathname === '/shop') {
            applyShopStyles();
        }
    }, [location.pathname]);

    if (location.pathname === '/shop') {
        applyShopStyles();
    }

    const { fetchCatsByCount, catCounted } = useCategories()

    useEffect(() => {
        fetchCatsByCount()
    }, [])


    const handleCategorySearch = (category_id: Number) => {
        setSelectedCat(category_id)
        let filtered = products.filter((e: any) => e.category.id === category_id)
        setFilteredProducts(filtered)
    }
    const removeCat = () => {
        setSelectedCat(null)
        setFilteredProducts(products)
    }

    const handleSearch = (searchParam: String) => {
        let filtered = products.filter((e: any) => e.title.includes(searchParam))
        setFilteredProducts(filtered)
    }

    const handleSort = (e: any) => {
        let option = Number(e.target.value);
        let sorted : any = [...products];

        if (option === 1) {
            sorted.sort((a: any, b: any) => a.price - b.price);
            setFilteredProducts(sorted);
        } if (option === 2) {
            sorted.sort((a: any, b: any) => b.price - a.price);
            setFilteredProducts(sorted);
        }
        if (option === 3) {
            let filtered = sorted.filter((e: any) => Boolean(e.sale_price) === true)
            setFilteredProducts(filtered)
        }
    };
    const gridStyles = [
        {
            id: 1,
            icon: TwoBlock,
            count: 3,
        },
        {
            id: 2,
            icon: OneBlock,
            count: 4,
        },
        {
            id: 3,
            icon: FourBlock,
            count: 6,
        },
    ]
    const [gridStyle, setGridStyle] = useState(4)

    return (
        <>
            <Box mt={15}></Box>
            <div className={'shop'}
                style={{ minHeight: "100vh" }}
            >
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Stack direction={'column'} alignItems={'flex-start'}>
                                <Stack direction={'row'}
                                    gap={'5px'}
                                    alignItems={'center'} justifyContent={'center'}>
                                    <input
                                        style={{ maxWidth: "190px" }}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        placeholder={t('shop_page.search_products')} className={'custom-input'} />
                                </Stack>
                            </Stack>
                            <Stack direction={'column'} alignItems={'flex-start'} mt={3}>
                                <Typography className={'min-title'}>{t('shops.category')}</Typography>
                                <Stack direction={'column'} pl={3}>
                                    {catCounted && catCounted.map((e: any) => {
                                        return (
                                            <>
                                                <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                                                    <Typography className={`sub-cat ${e.id == selectedCat ? 'selected-category' : null}`}
                                                        onClick={() => handleCategorySearch(e.id)}
                                                    >{e.name} ({e.count})</Typography>
                                                    {e.id == selectedCat ? (<>
                                                        <Box className='remove-cat'
                                                            onClick={removeCat}
                                                        >
                                                            <CloseIcon />
                                                        </Box>
                                                    </>) : null}
                                                </Stack>
                                            </>
                                        )
                                    })}
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        {isSettingEnabled('shop_slider') ? <News/> : null}
                        <Stack direction={'column'}>
                            {/* <Box mt={5}></Box> */}
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Stack direction={'row'} gap={'10px'} alignItems={'flex-end'}>
                                    {gridStyles.map((e: any) => {
                                        return (
                                            <>
                                                <Box
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setGridStyle(e.count)}
                                                >
                                                    <img
                                                        width={'20px'}
                                                        style={{
                                                            filter: 'brightness(0%) contrast(100%)',
                                                        }}
                                                        src={e.icon} />
                                                </Box>
                                            </>
                                        )
                                    })}
                                </Stack>
                                <Typography>
                                    <select className="custom-input" onChange={handleSort}>
                                        <option value="1">{t('shop_page.sort.price_desc')}</option>
                                        <option value="2">{t('shop_page.sort.price_asc')}</option>
                                        <option value="3">{t('shop_page.sort.sale')}</option>
                                    </select>
                                </Typography>
                            </Stack>
                            <Grid container spacing={3} mt={3}>
                                {loading ? <>{t('loading')}</> : (<>
                                    {filterdProducts && filterdProducts.map((e: AnimationPlaybackEvent) => {
                                        return (
                                            <>
                                                <Grid item xs={12} md={gridStyle} sm={6}>
                                                    <ShopItem product={e} />
                                                </Grid>
                                            </>
                                        )
                                    })}
                                </>)}
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}