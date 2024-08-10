import Typography from "@mui/material/Typography";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {Grid, Stack, Box} from "@mui/material";

export const Customers = () => {
    const customers = [
        {
            description: "Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg",
            name: "jennifer lewis"
        },
        {
            description: "Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-2.jpeg",
            name: "ALICIA HEART"
        },
        {
            description: "Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-1.jpeg",
            name: "JUAN CARLOS"
        },
    ]
    return (
        <>
            <section className={'customers-section'}
                     style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: 'center',
                         marginTop: "50px",
                         padding: "0 7px"
                     }}>
                <div className={'customers-inner-section'}>
                    <Typography
                        className={'header'}
                    >What Our Customers Say</Typography>
                    <Grid container mt={5} rowSpacing={5}>
                        {customers.map((e) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4}>
                                        <div className={'customers-item'}>
                                            <Stack direction={'column'} alignItems={'flex-start'} gap={'15px'}>
                                                <FormatQuoteIcon sx={{fontSize: "50px"}}/>
                                                <Typography className={'desc'}>{e.description}</Typography>
                                                <img src={e.img}
                                                     style={{borderRadius: "50%"}}
                                                     width={'40px'} height={'40px'}/>
                                                <Typography className={'name'}>{e.name.toUpperCase()}</Typography>
                                            </Stack>
                                        </div>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </div>
            </section>
        </>
    )
}
