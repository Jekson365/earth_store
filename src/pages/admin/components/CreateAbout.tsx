import { Box, Typography, Stack } from "@mui/material"
import { useCreateAbout } from "../../../hooks/about/useCreateAbout"
import { useEffect, useState } from "react"
import { useAbouts } from "../../../hooks/about/useAbouts"
import { useRemoveAbout } from "../../../hooks/about/useRemoveAbout"
import { FeaturedItem } from "../../../cusomts/FeaturedItem"
import { useTranslation } from "react-i18next"

export const CreateAbout = () => {
    const { createAbout } = useCreateAbout()
    const { about, fetchAbouts } = useAbouts()
    const { removeAbout } = useRemoveAbout()
    const { t } = useTranslation()
    const [aboutParams, setAboutParams] = useState({})
    useEffect(() => {
        fetchAbouts()
    }, [])
    return (
        <>
            <Box>
                <Typography className="component-title">{t('admin.about')}</Typography>
                <form encType="multipart/form-data">
                    <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                        <input type="text"
                            onChange={(e) => setAboutParams({ ...aboutParams, title: e.target.value })}
                            placeholder={t('admin.title')} className="custom-input" />
                        <input type="text"
                            onChange={(e) => setAboutParams({ ...aboutParams, description: e.target.value })}
                            placeholder={t('admin.description')} className="custom-input" />
                        <input type="file" placeholder="image"
                            onChange={(e: any) => setAboutParams({ ...aboutParams, about_image_attributes: { image: e.target.files[0] } })}
                            className="custom-input" />
                    </Stack>
                </form>

                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {about && about.map((e: any) => {
                        return (
                            <>

                                <FeaturedItem
                                    id={e.id}
                                    content={e.title}
                                    action={removeAbout}
                                >
                                </FeaturedItem>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="admin-button"
                        onClick={() => createAbout(aboutParams)}
                    >{t('admin.save')}</button>
                </Box>
            </Box>
        </>
    )
}