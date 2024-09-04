import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { usePostcard } from "../../../hooks/postcards/usePostcard.";
import { defaultUrl } from "../../../AxiosInstance";
import { useTranslation } from "react-i18next";

export const Postcard = () => {
    const { getPostcard, postcard } = usePostcard()
    const { t } = useTranslation()

    useEffect(() => {
        getPostcard()
        console.log(postcard)
    }, [])

    return (
        <>
            <div className={'postcard'}
                style={{
                    marginTop: "20px",
                    backgroundImage: `
                    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                    url('${postcard && postcard.image && defaultUrl + postcard.image.url || ''}')`
                }}
            >
                <Stack
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={'10px'}
                    textAlign={'center'}
                >
                    <Typography className={'title'}>{postcard && postcard.title}</Typography>
                    <Typography className={'desc'}>{postcard && postcard.min_title}</Typography>
                    <Box mt={5}>
                        <button className={'main-button'}>{t('buy.buy_now')}</button>
                    </Box>
                </Stack>
            </div>
        </>
    )
}