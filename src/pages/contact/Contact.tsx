import {HeaderContent} from "../homepage/components/HeaderContent.tsx";
import Typography from "@mui/material/Typography";
import {Box, Grid, Stack} from "@mui/material";
import '../../styles/contact/contact.scss'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";

export const Contact = () => {
    const { getOpenings, opening } = useOpening()
    useEffect(() => {
        getOpenings()
    }, [])
    const info = [
        {
            title: "email",
            content: "something@tyler.com",
            icon: <MailIcon/>
        },
        {
            title: "Phone",
            content: "202-555-0188",
            icon: <LocalPhoneIcon/>
        },
        {
            title: "ADDRESS",
            content: "2727 Ocean Road,\n" +
                "Malibu, CA, 90264",
            icon: <LocationOnIcon/>
        },
    ]
    const socials = [
        {
            url: '',
            icon: <FacebookIcon/>
        },
        {
            url: '',
            icon: <InstagramIcon/>
        },
        {
            url: '',
            icon: <XIcon/>
        }
    ]
    return (
        <>
            <HeaderContent title={'CONTACT'} height={'50vh'} desc={''} mainPage={false} image={opening.image}/>
            <div className={'contact-section'}>
                <Grid container maxWidth={'1200px'} margin={'0 auto'}>
                    <Grid xs={12} md={6} item p={5}>
                        <Typography className={'title'}>Get In Touch</Typography>
                        <Box className={'contact-box shadowed'}>
                            <Stack direction={'column'} gap={'15px'}>
                                <input className={'custom-input'} placeholder={'Full name'}/>
                                <input className={'custom-input'} placeholder={'Phone Number'}/>
                                <input className={'custom-input'} placeholder={'Email'}/>
                                <textarea className={'custom-input'} placeholder={'Full name'}></textarea>
                                <button className={'main-button'}
                                        style={{alignSelf: "flex-start"}}
                                >SEND NOW
                                </button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} item p={5}>
                        <Typography className={'title'}>Talk to Us</Typography>
                        <Stack direction={'column'} gap={'40px'}>
                            {info.map((e) => {
                                return (
                                    <>
                                        <Stack direction={'row'}
                                               gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                            <div className={'icon'}>
                                                {e.icon}
                                            </div>
                                            <Stack direction={'column'} gap={'0px'}>
                                                <Typography className={'title'}>{e.title}</Typography>
                                                <Typography className={'content'}>{e.content}</Typography>
                                            </Stack>
                                        </Stack>
                                    </>
                                )
                            })}
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