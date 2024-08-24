import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import React from "react";
import { Link } from 'react-router-dom'
import { defaultUrl } from "../../../AxiosInstance";

interface HeaderContentProps {
    title: String;
    desc: String;
    height: any,
    mainPage: boolean,
    image: any
}

export const HeaderContent: React.FC<HeaderContentProps> = ({ title, desc, height, mainPage, image }) => {
    return (
        <>
            <div className={'section'}
                style={{
                    height: height,
                    backgroundImage: `
                        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
                        url('${image ? defaultUrl + image['url'] : ''}')
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className={'inner-section'}

                >
                    <Stack
                        direction={"column"}
                        alignItems={'center'}
                        justifyContent={'center'}
                        className={'opening-data'}
                        gap={'10px'}
                    >
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography className={'title main-title-color'}>{title}</Typography>
                            {mainPage ? <Typography className={'min-title main-subtitle-color'}>{desc}</Typography> : null}
                        </Stack>
                        {mainPage ? <button className={'main-button'}
                        ><Link to={'/shop'}
                            style={{ color: "white" }}
                        >SHOP NOW</Link></button> : null}
                    </Stack>
                </div>
            </div>
        </>
    )
}
