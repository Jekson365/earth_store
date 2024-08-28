import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSocials } from '../hooks/socials/useSocials';
import { Stack } from '@mui/material';
import { useEffect } from 'react';


export const Socials = () => {
    const { social, fetchSocial } = useSocials()
    const socials: any = [
        {
            url: '',
            icon: <FacebookIcon />,
            id: 1,
        },
        {
            url: '',
            icon: <InstagramIcon />,
            id: 2,
        },
    ]
    useEffect(()=> {
        fetchSocial()
    },[])
    return (
        <>
            <Stack direction={'row'} gap={'10px'} mt={2}>
                {social && social.map((e: any) => {
                    return (
                        <>
                            {e.social_link != '' ? (<>
                                <a className={'social-icon'} href={e.social_link}>
                                    {socials.find((item: any) => item.id === e.id).icon}
                                </a>
                            </>) : null}
                        </>
                    )
                })}
            </Stack>
        </>
    )
}