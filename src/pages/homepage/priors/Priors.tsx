import LockIcon from '@mui/icons-material/Lock';
import {Grid} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
export const Priors = () => {
    const priors = [
        {
            title:"SECURE PAYMENT",
            desc:"All our payments our SSL secured",
            icon:<LockIcon/>
        },
        {
            title:"DELIVERED WITH CARE",
            desc:"All our payments our SSL secured",
            icon:<LocalShippingIcon/>
        },
        {
            title:"EXCELLENT SERVICE",
            desc:"All our payments our SSL secured",
            icon:<VolunteerActivismIcon/>
        },
    ]
    return (
        <>
            <div className={'priors-section'}>
                <div className={'inner-section'}>
                    <Grid container columnSpacing={3} rowSpacing={5}>
                        {priors.map((e)=> {
                            return (
                                <>
                                    <Grid item xs={12} md={4}>
                                        <Stack direction={'row'}
                                               gap={'20px'} alignItems={'flex-start'} className={'each-prior'}>
                                            <div className={'icon'}>
                                                {e.icon}
                                            </div>
                                            <Stack direction={'column'} gap={'5px'}>
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
            </div>
        </>
    )
}