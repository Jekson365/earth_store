import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSocials } from '../hooks/socials/useSocials';
import { useEffect } from 'react';
import { Stack } from '@mui/material';

export const SocialIcons = () => {
    const { social, fetchSocial } = useSocials()
    const socials: any = [
        {
            url: '',
            icon: <FacebookIcon className='social-icon-side' />,
            id: 1,
        },
        {
            url: '',
            icon: <InstagramIcon className='social-icon-side' />,
            id: 2,
        },
    ]
    useEffect(() => {
        fetchSocial()
    }, [])

    return (
        <>
            <div className="social-icon-cover">
                <Stack direction={'column'} gap={'20px'} mt={2}>
                    {social && social.map((e: any) => {
                        return (
                            <>
                                {e.social_link != '' ? (<>
                                    <a href={e.social_link}>
                                        {socials.find((item: any) => item.id === e.id).icon}
                                    </a>
                                </>) : null}
                            </>
                        )
                    })}
                </Stack>
            </div>
        </>
    )
}