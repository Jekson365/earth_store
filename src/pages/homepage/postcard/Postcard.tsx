import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { usePostcard } from "../../../hooks/postcards/usePostcard.";

export const Postcard = () => {
    const { getPostcard,postcard } = usePostcard()

    useEffect(() => {
        getPostcard()
    }, [])

    return (
        <>
            <div className={'postcard'}
                style={{
                    marginTop: "20px",
                    backgroundImage: `url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Call-to-action.jpg')`
                }}
            >
                <Stack
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={'10px'}
                    textAlign={'center'}
                >
                    <Typography className={'title'}>{postcard.title}</Typography>
                    <Typography className={'desc'}>{postcard.min_title}</Typography>
                    <Box mt={5}>
                        <button className={'main-button'}>PURCHASE A POSTCARD</button>
                    </Box>
                </Stack>
            </div>
        </>
    )
}