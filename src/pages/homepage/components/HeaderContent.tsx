import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'

export const HeaderContent = () => {
    return (
        <>
            <div className={'section'}
                 style={{backgroundImage: 'url("https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg")'}}
            >
                <div className={'inner-section'}>
                    <Stack
                        direction={"column"}
                        alignItems={'center'}
                        justifyContent={'center'}
                        className={'opening-data'}
                        gap={'10px'}
                    >
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography className={'title'}>EARTH</Typography>
                            <Typography className={'min-title'}>MULTIPURPOSE STORE</Typography>
                        </Stack>
                        <button className={'main-button'}>SHOP NOW</button>
                    </Stack>
                </div>
            </div>
        </>
    )
}
