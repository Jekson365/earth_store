import Typography from "@mui/material/Typography";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Grid, Stack } from "@mui/material";
import { useCustomers } from "../../../hooks/customers/useCustomers";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Customers = () => {
    const { customers, fetchCustomers } = useCustomers()
    const { t } = useTranslation()
    useEffect(() => {
        fetchCustomers()
    }, [])
    return (
        <>
            <section className={'customers-section'}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginTop: "50px",
                    padding: "0 7px"
                }}>
                <div className={'customers-inner-section'}>
                    <Typography
                        className={'header'}
                    >{t('clients.clients_thought')}</Typography>
                    <Grid container mt={5} rowSpacing={5}>
                        {customers && customers.map((e: any) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4}>
                                        <div className={'customers-item'}>
                                            <Stack direction={'column'} alignItems={'flex-start'} gap={'15px'}>
                                                <FormatQuoteIcon sx={{ fontSize: "50px" }} />
                                                <Typography className={'desc'}>{e.review_text}</Typography>
                                                <Typography className={'name'}>{e.name.toUpperCase()} - {e.surname.toUpperCase()}</Typography>
                                            </Stack>
                                        </div>
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
