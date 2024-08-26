import { Box, Grid, Stack, Typography } from "@mui/material";
import '../../styles/shop/shop.scss'
import { useLocation } from 'react-router-dom'
import { useProducts } from "../../hooks/products/useProducts";
import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/categories/useCategories";
import CloseIcon from '@mui/icons-material/Close';
import { ShopItem } from "./ShopItem";
import { News } from "./News";

export const Shop = () => {
    const { products, fetchProducts, loading } = useProducts()
    const [filterdProducts, setFilteredProducts] = useState([])
    const [selectedCat, setSelectedCat] = useState<Number | null>(null)
    const location = useLocation()
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
        let sorted = [...products];

        if (option === 1) {
            sorted.sort((a: any, b: any) => a.price - b.price);
        } else {
            sorted.sort((a: any, b: any) => b.price - a.price);
        }

        setFilteredProducts(sorted);
    };


    return (
        <>
            <Box mt={15}></Box>
            <div className={'shop'}
                style={{minHeight:"100vh"}}
            >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Stack direction={'column'} alignItems={'flex-start'}>
                                <Stack direction={'row'}
                                    gap={'5px'}
                                    alignItems={'center'} justifyContent={'center'}>
                                    <input
                                        style={{ maxWidth: "190px" }}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        placeholder={'Search Products...'} className={'custom-input'} />
                                </Stack>
                            </Stack>
                            <Stack direction={'column'} alignItems={'flex-start'} mt={3}>
                                <Typography className={'min-title'}>Categories</Typography>
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
                    <Grid item xs={12} md={8}>
                        <News/>
                        <Stack direction={'column'}>
                            <Typography className={'shop-title'}>Products</Typography>
                            <Box mt={5}></Box>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography>Showing all 6 results</Typography>
                                <Typography>
                                    <select className="custom-input" onChange={handleSort}>
                                        <option value="1">price Asc</option>
                                        <option value="2">price Desc</option>
                                    </select>
                                </Typography>
                            </Stack>
                            <Grid container spacing={3} mt={3}>
                                {loading ? <>Loading...</> : (<>
                                    {filterdProducts && filterdProducts.map((e: any) => {
                                        return (
                                            <>
                                                <Grid item xs={12} md={4} sm={6}>
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