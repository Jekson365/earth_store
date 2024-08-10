import {Grid} from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'

export const Featured = () => {
    const products = [
        {
            category: "Poster",
            id: 22,
            title: "Poster v1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
        },
        {
            category: "Poster",
            id: 23,
            title: "Poster v1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg"
        },
        {
            category: "Poster",
            id: 24,
            title: "Poster v1",
            price: "23.99",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
        },
    ];

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
                        {products.map((e, index) => {
                            return (

                                <Grid xs={12} md={4} item key={index}>
                                    <Link to={`/product/${e.id}`}>
                                        <Stack direction={'column'} alignItems={'flex-start'} gap={'10px'}>
                                            <Box className={'featured-item'}
                                                 sx={{
                                                     width: "95%",
                                                     margin: "0 auto"
                                                 }}
                                            >
                                                <img src={e.img} alt={'m'}/>
                                            </Box>
                                            <Stack
                                                direction={'column'}
                                                alignItems={'flex-start'}
                                                gap={'5px'}
                                                pl={2}
                                                className={'feat-content'}
                                            >
                                                <Typography className={'cat'}>{e.category}</Typography>
                                                <Typography className={'title'}>{e.title}</Typography>
                                                <Typography className={'price'}>${e.price}</Typography>
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
