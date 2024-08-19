import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useFeaturedProducts } from "../../../hooks/featured_products/useFeaturedProducts";
import { defaultUrl } from "../../../AxiosInstance";

export const Featured = () => {
    const { featuredProducts, fetchFeaturedProducts } = useFeaturedProducts()
    useEffect(() => {
        console.log(featuredProducts)
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
                    padding: "0 7px"
                }}>
                <div className={'inner-section'}>
                    <Grid container columnSpacing={1} rowSpacing={1}>
                        {featuredProducts && featuredProducts.map((e: any, index: number) => {
                            return (
                                <Grid item xs={12} md={4} key={index}>
                                    <Link to={`/product/${e.id}`}>
                                        <Stack direction={'column'} alignItems={'flex-start'} gap={'10px'}>
                                            <Box
                                                className={'featured-item'}
                                                sx={{
                                                    width: '100%', // Ensures the box takes full width
                                                    paddingTop: '100%', // This makes the box square by setting height equal to width
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
                    </Grid>
                </div>

            </section>
        </>
    );
};
