import { Postcard } from "../homepage/postcard/Postcard.tsx";
import { HeaderContent } from "../homepage/components/HeaderContent.tsx";
import { Content } from "./content/Content.tsx";
import Box from '@mui/material/Box'
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";

export const About = () => {
    const { getOpenings, opening } = useOpening()
    useEffect(() => {
        getOpenings()
    }, [])
    return (
        <>
            <HeaderContent title={'WHO ARE WE?'} height={'50vh'} desc={''}
                mainPage={false} opening_images={opening.opening_images}
                slider={false}
            />
            <Content />
            <Box mt={15}></Box>
            <Postcard />
        </>
    )
}