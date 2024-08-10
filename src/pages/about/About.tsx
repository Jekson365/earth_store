import {Postcard} from "../homepage/postcard/Postcard.tsx";
import {HeaderContent} from "../homepage/components/HeaderContent.tsx";
import {Content} from "./content/Content.tsx";
import Box from '@mui/material/Box'

export const About = () => {
    return (
        <>
            <HeaderContent title={'WHO ARE WE?'} height={'50vh'} desc={''} mainPage={false}/>
            <Content/>
            <Box mt={15}></Box>
            <Postcard/>
        </>
    )
}