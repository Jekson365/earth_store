import '../../../styles/about/about.scss'
import {Box, Grid} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Content = () => {
    const about = [
        {
            title: "OUR MISSION",
            desc: "Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min-1024x762.jpg"
        },
        {
            title: "OUR MISSION",
            desc: "Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min-1024x762.jpg"
        },
        {
            title: "OUR MISSION",
            desc: "Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.",
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min-1024x762.jpg"
        },
    ]
    return (
        <>
            <section className={'about-section'}>
                <div className={'inner-section'}>
                    <Grid container rowSpacing={5} columnSpacing={5}>
                        {about.map((e) => {
                            return (
                                <>
                                    <Grid item xs={12}
                                          minHeight={'50vh'}
                                          display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                        <Stack direction={'row'} flexWrap={'wrap'}>
                                            <Box className={'content-box'}>
                                                <img src={e.img}/>
                                            </Box>
                                            <Stack
                                                direction={'column'}
                                                alignItems={'flex-start'}
                                                p={{xs:5,md:10}}
                                                gap={'20px'}
                                            >
                                                <Typography className={'title'}>{e.title}</Typography>
                                                <Typography className={'desc'}>{e.desc}</Typography>
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