import { Box, Typography, Stack } from "@mui/material"
import { useCreateAbout } from "../../../hooks/about/useCreateAbout"
import { useEffect, useState } from "react"
import { useAbouts } from "../../../hooks/about/useAbouts"
import { useRemoveAbout } from "../../../hooks/about/useRemoveAbout"

export const CreateAbout = () => {
    const { createAbout } = useCreateAbout()
    const { about, fetchAbouts } = useAbouts()
    const { removeAbout } = useRemoveAbout()
    const [aboutParams, setAboutParams] = useState({})
    useEffect(() => {
        fetchAbouts()
    }, [])
    return (
        <>
            <Box>
                <Typography className="component-title">About</Typography>
                <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                    <form encType="multipart/form-data">
                        <input type="text"
                            onChange={(e) => setAboutParams({ ...aboutParams, title: e.target.value })}
                            placeholder="title" className="custom-input" />
                        <input type="text"
                            onChange={(e) => setAboutParams({ ...aboutParams, description: e.target.value })}
                            placeholder="description" className="custom-input" />
                        <input type="file" placeholder="image"
                            onChange={(e: any) => setAboutParams({ ...aboutParams, about_image_attributes: { image: e.target.files[0] } })}
                            className="custom-input" />
                    </form>

                </Stack>
                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {about && about.map((e: any) => {
                        return (
                            <>

                                <div className="featured-item"
                                    onClick={() => removeAbout(e.id)}
                                >
                                    {e.title}
                                </div>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="main-button"
                        onClick={() => createAbout(aboutParams)}
                    >SAVE</button>
                </Box>
            </Box>
        </>
    )
}