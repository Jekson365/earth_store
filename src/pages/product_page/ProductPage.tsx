import {useEffect} from "react";
import {Grid, Box, Stack} from '@mui/material'
import '../../styles/current/currentproduct.scss'

export const ProductPage = () => {
    const currentProductId = window.location.href.split("/")[4]
    useEffect(() => {
        console.log(currentProductId)
    }, [])
    return (
        <>
            <Box mt={20}></Box>
            <div className={'cover'}>
                <Box className={'inner-cover'}>
                    <Grid container columnSpacing={7}>
                        <Grid item xs={12} md={6}>
                            <Box
                                maxWidth={'600px'}
                                height={'90%'}
                                overflow={'hidden'}
                            >
                                <img
                                    src={'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6.jpg'}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack gap={'20px'} className={'prod-content'}>
                                <p className={'location'}>Home / Posters / Poster V2</p>
                                <p className={'category'}>Posters</p>
                                <h2 className={'main-title'}>Poster V2</h2>
                                <p className={'price'}>$17.99</p>
                                <p className={'desc'}>Inspirational posters are a great way to be inspired and
                                    encouraged to take on new
                                    challenges and adventures. Hang up a poster at home or in the office to be reminded
                                    how much beauty awaits in the world, luring you out of your comfort zone and into a
                                    world where possibility resides.</p>
                                <button className={'main-button'}
                                        style={{width: "fit-content", padding: "10px", fontSize: "15px"}}
                                >ADD TO CART
                                </button>
                                <div className={'line'}></div>
                                <p className={'currentcat'}>Category: <span className={'green'}>Posters</span></p>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack direction={'column'} gap={'30px'} className={'description'} mt={5}>
                        <Box>
                            <b className={'title'}>Framed Without Borders:</b>
                            <ul style={{marginLeft: "25px", display: "flex", flexDirection: "column", gap: "10px"}}>
                                <li style={{marginTop:"10px"}}>1-inch thick wooden back frame.</li>
                                <li>No additional hanging hardware is required</li>
                                <li>Printed on High-Quality vinyl.</li>
                                <li>Care: Dust with a soft, dry cloth.</li>
                            </ul>
                        </Box>
                        <Box>
                            <b className={'title'}>Framed Without Borders:</b>
                            <ul style={{marginLeft: "25px", display: "flex", flexDirection: "column", gap: "10px"}}>
                                <li style={{marginTop:"10px"}}>1-inch thick wooden back frame.</li>
                                <li>No additional hanging hardware is required</li>
                                <li>Printed on High-Quality vinyl.</li>
                                <li>Care: Dust with a soft, dry cloth.</li>
                            </ul>
                        </Box>
                    </Stack>
                </Box>
            </div>
        </>
    )
}