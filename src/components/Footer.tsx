import '../styles/partials/footer.scss'
import {Grid} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Footer = () => {
    return (
        <>
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    borderTop:"1px solid gray",
                    minHeight: "12vh",
                }}
                className={'footer-section'}
            >
                <Grid container
                      style={{
                          maxWidth: "1200px", margin: "0 auto",
                          display: "flex",
                          alignItems: "center",
                      }}
                      rowSpacing={5}
                >
                    <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                        <Stack direction={'row'} gap={'20px'}>
                            <Typography>Home</Typography>
                            <Typography>About</Typography>
                            <Typography>Shop</Typography>
                            <Typography>Contact</Typography>
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