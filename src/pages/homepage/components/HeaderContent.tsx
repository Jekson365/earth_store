import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import React from "react";

interface HeaderContentProps {
    title: String;
    desc: String;
    height: any,
    mainPage: boolean
}
export const HeaderContent: React.FC<HeaderContentProps> = ({title, desc,height, mainPage}) => {
    return (
        <>
            <div className={'section'}
                 style={{
                     height:height,
                     backgroundImage: 'url("https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg")'}}
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
                            <Typography className={'title'}>{title}</Typography>
                            {mainPage ? <Typography className={'min-title'}>{desc}</Typography> : null}
                        </Stack>
                        {mainPage ? <button className={'main-button'}>SHOP NOW</button> : null}
                    </Stack>
                </div>
            </div>
        </>
    )
}
