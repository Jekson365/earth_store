import { Postcard } from "../homepage/postcard/Postcard.tsx";
import { HeaderContent } from "../homepage/components/HeaderContent.tsx";
import { Content } from "./content/Content.tsx";
import Box from '@mui/material/Box'
import { useOpening } from "../../hooks/openings/useOpening.tsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useIndexSettings } from "../../hooks/settings/useIndexSettings.tsx";

export const About = () => {
    const { getOpenings, opening } = useOpening()
    const { t } = useTranslation()
    useEffect(() => {
        getOpenings()
    }, [])

    const { settings, fetchSettings } = useIndexSettings()

    useEffect(() => {
        fetchSettings()
    }, [])

    const isSettingEnabled = (paramName: string) => {
        const setting = settings.find((s: any) => s.param_name === paramName)
        return setting ? setting.status : false
    }
    return (
        <>
            <HeaderContent title={t('about_us.who')} height={'50vh'} desc={''}
                mainPage={false} opening_images={opening.opening_images}
                slider={true}
            />
            <Content />
            {isSettingEnabled('postcard') ? <>
                <Box mt={15}></Box>
                <Postcard />
            </> : null}
        </>
    )
}