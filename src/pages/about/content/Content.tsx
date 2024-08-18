import '../../../styles/about/about.scss'
import { Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAbouts } from '../../../hooks/about/useAbouts';
import { useEffect } from 'react';
import { defaultUrl } from '../../../AxiosInstance';

export const Content = () => {
    const { about, fetchAbouts } = useAbouts()
    useEffect(() => {
        fetchAbouts()
        console.log(about)
    }, [])
    return (
        <>
            <section className={'about-section'}>
                <div className={'inner-section'}>
                    <Grid container rowSpacing={5} columnSpacing={5}>
                        {about && about.map((e : any) => {
                            return (
                                <>
                                    <Grid item xs={12}
                                        minHeight={'50vh'}
                                        display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                        <Stack direction={'row'} flexWrap={'wrap'}>
                                            <Box className={'content-box'}>
                                                <img src={defaultUrl + e.about_image.image.url} />
                                            </Box>
                                            <Stack
                                                direction={'column'}
                                                alignItems={'flex-start'}
                                                p={{ xs: 5, md: 10 }}
                                                gap={'20px'}
                                            >
                                                <Typography className={'title'}>{e.title}</Typography>
                                                <Typography className={'desc'}>{e.description}</Typography>
                                            </Stack>
                                        </Stack>
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