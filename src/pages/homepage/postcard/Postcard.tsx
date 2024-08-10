import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {Box} from "@mui/material";

export const Postcard = () => {
    return (
        <>
            <div className={'postcard'}
                style={{
                    marginTop:"20px",
                    backgroundImage:`url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Call-to-action.jpg')`
                }}
            >
                <Stack
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={'10px'}
                    textAlign={'center'}
                >
                    <Typography className={'title'}>Give the Gift of a Postcard</Typography>
                    <Typography className={'desc'}>Give the gift of a lasting memory with a postcard</Typography>
                    <Box mt={5}>
                        <button className={'main-button'}>PURCHASE A POSTCARD</button>
                    </Box>
                </Stack>
            </div>
        </>
    )
}