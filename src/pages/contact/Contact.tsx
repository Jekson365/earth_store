import { HeaderContent } from "../homepage/components/HeaderContent.tsx";
import Typography from "@mui/material/Typography";
import { Box, Grid, Stack } from "@mui/material";
import '../../styles/contact/contact.scss'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";
import { useContactInfo } from "../../hooks/contact_infos/useContactInfo.tsx";
import { useTranslation } from "react-i18next";
import { useSocials } from "../../hooks/socials/useSocials.tsx";
import { Socials } from "../../components/Socials.tsx";

export const Contact = () => {
    const { getOpenings, opening } = useOpening()
    const { contactInfos, fetchContactInfos } = useContactInfo()
    const { fetchSocial } = useSocials()
    const { t } = useTranslation()
    useEffect(() => {
        fetchContactInfos()
        getOpenings()
        fetchSocial()
    }, [])
    return (
        <>
            <HeaderContent title={t('contact')} height={'50vh'} desc={''} mainPage={false} opening_images={opening.opening_images} slider={true} />
            <div className={'contact-section'}>
                <Grid container maxWidth={'1200px'} margin={'0 auto'}>
                    <Grid xs={12} md={6} item p={5}>
                        <Typography className={'title'}>{t('contact_page.get_in_touch')}</Typography>
                        <Box className={'contact-box shadowed'}>
                            <Stack direction={'column'} gap={'15px'}>
                                <input className={'custom-input'} placeholder={t('contact_page.full_name')} />
                                <input className={'custom-input'} placeholder={t('contact_page.phone_number')} />
                                <input className={'custom-input'} placeholder={t('contact_page.email')} />
                                <textarea className={'custom-input'} placeholder={t('contact_page.text')}></textarea>
                                <button className={'main-button'}
                                    style={{ alignSelf: "flex-start" }}
                                >{t('contact_page.send')}
                                </button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} item p={5}>
                        <Typography className={'title'}>{t('contact_page.talk_to_us')}</Typography>
                        <Stack direction={'column'} gap={'40px'}>
                            <Stack direction={'row'}
                                gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                <div className={'icon'}>
                                    <MailIcon />
                                </div>
                                <Stack direction={'column'} gap={'0px'}>
                                    <Typography className={'title'}>{t('contact_page.email')}</Typography>
                                    <Typography className={'content'}>{contactInfos && contactInfos.email}</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'}
                                gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                <div className={'icon'}>
                                    <LocalPhoneIcon />
                                </div>
                                <Stack direction={'column'} gap={'0px'}>
                                    <Typography className={'title'}>{t('contact_page.phone')}</Typography>
                                    <Typography className={'content'}>{contactInfos && contactInfos.phone_number}</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'}
                                gap={'20px'} alignItems={'flex-start'} className={'each-info'}>
                                <div className={'icon'}>
                                    <LocationOnIcon />
                                </div>
                                <Stack direction={'column'} gap={'0px'}>
                                    <Typography className={'title'}>{t('contact_page.location')}</Typography>
                                    <Typography className={'content'}>{contactInfos && contactInfos.location}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={'column'} alignItems={'flex-start'} mt={5} ml={8}>
                            <Typography className={'min-title'}>{t('contact_page.follow_us')}</Typography>
                            <Socials/>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}