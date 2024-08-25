import { Box, Stack } from "@mui/material"
import { useOpening } from "../../../../hooks/openings/useOpening"
import { useEffect } from "react"
import { defaultUrl } from "../../../../AxiosInstance"
import CloseIcon from '@mui/icons-material/Close';
import { useRemoveImage } from "../../../../hooks/openings/useRemoveImage";

function OpeningImages() {
    const { getOpenings, opening } = useOpening()
    const { removeImage } = useRemoveImage()

    useEffect(() => {
        getOpenings()
    }, [])

    const handleDeleteImage = (id: Number) => {
        removeImage(id)
    }
    return (
        <>
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    gap={'10px'}
                    flexWrap={'wrap'}
                >
                    {opening && opening.opening_images && opening.opening_images.map((e: any) => {
                        return (
                            <>
                                <Box
                                    sx={{
                                        width: "220px",
                                        height: "150px",
                                        backgroundImage: `url('${defaultUrl + e.image.url}')`,
                                        backgroundSize: "cover",
                                        outline: "1px solid gray",
                                        border: "10px solid white",
                                        padding: "10px",
                                        position: "relative"
                                    }}
                                    className='slide-images'
                                    onClick={()=>handleDeleteImage(e.id)}
                                >
                                    <div className="delete-icon">
                                        <div className="icon">
                                            <CloseIcon />
                                        </div>
                                    </div>
                                </Box>
                            </>
                        )
                    })}
                </Stack>
            </Box>
        </>
    )
}

export default OpeningImages