import '../styles/partials/footer.scss'
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    borderTop: "1px solid gray",
                    minHeight: "15vh",
                }}
                className={'footer-section'}
            >
                <Grid container
                    style={{
                        maxWidth: "1200px", margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                    }}
                    rowSpacing={{ xs: 5, md: 0 }}
                >
                    <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                        <Stack direction={'row'} gap={'20px'} className='footer-items'>
                            <Link to={'/'}>{t('home')}</Link>
                            <Link to={'/about'}>{t('about')}</Link>
                            <Link to={'/shop'}>{t('shop')}</Link>
                            <Link to={'/contact'}>{t('contact')}</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign={'center'}>
                        <h1 className={'footer-title'}>EARTH STORE</h1>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign={'end'} display={'flex'} justifyContent={'center'}>
                        Copyright © Puzzles
                    </Grid>
                </Grid>
            </section>
        </>
    )
}