import { HeaderContent } from "../homepage/components/HeaderContent.tsx";
import Typography from "@mui/material/Typography";
import { Box, Grid, Stack } from "@mui/material";
import '../../styles/contact/contact.scss'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";
import { useContactInfo } from "../../hooks/contact_infos/useContactInfo.tsx";

export const Contact = () => {
    const { getOpenings, opening } = useOpening()
    const { contactInfos, fetchContactInfos } = useContactInfo()
    useEffect(() => {
        fetchContactInfos()
        getOpenings()
    }, [])
    const socials = [
        {
            url: '',
            icon: <FacebookIcon />
        },
        {
            url: '',
            icon: <InstagramIcon />
        },
        {
            url: '',
            icon: <XIcon />
        }
    ]
    return (
        <>
            <HeaderContent title={'CONTACT'} height={'50vh'} desc={''} mainPage={false} opening_images={opening.opening_images} slider={false} />
            <div className={'contact-section'}>
                <Grid container maxWidth={'1200px'} margin={'0 auto'}>
                    <Grid xs={12} md={6} item p={5}>
                        <Typography className={'title'}>Get In Touch</Typography>
                        <Box className={'contact-box shadowed'}>
                            <Stack direction={'column'} gap={'15px'}>
                                <input className={'custom-input'} placeholder={'Full name'} />
                                <input className={'custom-input'} placeholder={'Phone Number'} />
                                <input className={'custom-input'} placeholder={'Email'} />
                                <textarea className={'custom-input'} placeholder={'Full name'}></textarea>
                                <button className={'main-button'}
                                    style={{ alignSelf: "flex-start" }}
                                >SEND NOW
                                </button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} item p={5}>
                        <Typography className={'title'}>Talk to Us</Typography>
                        <Stack direction={'column'} gap={'40px'}>
                            <Stack direction={'row'}
                                gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                <div className={'icon'}>
                                    <MailIcon />
                                </div>
                                <Stack direction={'column'} gap={'0px'}>
                                    <Typography className={'title'}>Email</Typography>
                                    <Typography className={'content'}>{contactInfos && contactInfos.email}</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'}
                                gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                <div className={'icon'}>
                                    <LocalPhoneIcon />
                                </div>
                                <Stack direction={'column'} gap={'0px'}>
                                    <Typography className={'title'}>Phone</Typography>
                                    <Typography className={'content'}>{contactInfos && contactInfos.phone_number}</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'}
                                gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                <div className={'icon'}>
                                    <LocationOnIcon />
                                </div>
                                <Stack direction={'column'} gap={'0px'}>
                                <Typography className={'title'}>Location</Typography>
                                    <Typography className={'content'}>{contactInfos && contactInfos.location}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={'column'} alignItems={'flex-start'} mt={5} ml={8}>
                            <Typography className={'min-title'}>Follow Us:</Typography>
                            <Stack direction={'row'} gap={'10px'} mt={2}>
                                {socials.map((e) => {
                                    return (
                                        <>
                                            <Box className={'social-icon'}>
                                                {e.icon}
                                            </Box>
                                        </>
                                    )
                                })}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}