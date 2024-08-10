import {Box, Grid, Stack, Typography} from "@mui/material";
import '../../styles/shop/shop.scss'
import SearchIcon from '@mui/icons-material/Search';

export const Shop = () => {
    const products = [
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },
        {
            category: "Postcards",
            title: "Postcard V1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
        },

    ]

    return (
        <>
            <Box mt={15}></Box>
            <div className={'shop'}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Box >
                            <Stack direction={'column'} alignItems={'flex-start'}>
                                <Stack direction={'row'}
                                       gap={'5px'}
                                       alignItems={'center'} justifyContent={'center'}>
                                    <input
                                        style={{maxWidth: "190px"}}
                                        placeholder={'Search Products...'} className={'custom-input'}/>
                                    <button className={'main-icon'}>
                                        <SearchIcon/>
                                    </button>
                                </Stack>
                            </Stack>
                            <Stack direction={'column'} alignItems={'flex-start'} mt={3}>
                                <Typography className={'min-title'}>Categories</Typography>
                                <Stack direction={'column'} pl={3}>
                                    <Typography className={'sub-cat'}>Postcards (6)</Typography>
                                    <Typography className={'sub-cat'}>Posters (6)</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Stack direction={'column'}>
                            <Typography className={'shop-title'}>Postcards</Typography>
                            <Box mt={5}></Box>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography>Showing all 6 results</Typography>
                                <Typography>Sorting</Typography>
                            </Stack>
                            <Grid container spacing={3} mt={3}>
                                {products.map((e)=> {
                                    return (
                                        <>
                                            <Grid item xs={12} md={4} sm={6}>
                                                <Box
                                                    style={{
                                                        backgroundImage:`url('${e.img}')`,
                                                        backgroundRepeat:"no-repeat",
                                                        backgroundSize:"cover",
                                                        overflow:"hidden",
                                                        minWidth:"250px",
                                                        minHeight:"250px"
                                                    }}
                                                ></Box>
                                                <Stack direction={'column'} gap={'5px'}>
                                                    <Typography
                                                        mt={1}
                                                    style={{fontSize:"13px",color:"gray"}}
                                                    >{e.category}</Typography>
                                                    <Typography mt={1}>{e.title}</Typography>
                                                    <Typography>{e.price}</Typography>
                                                </Stack>
                                            </Grid>
                                        </>
                                    )
                                })}
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}