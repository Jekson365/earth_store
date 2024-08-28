import { Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useCreateSlider } from "../../../hooks/shops_slider/useCreateSlider"
import { useSlider } from "../../../hooks/shops_slider/useSlider"
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material"
import { defaultUrl } from "../../../AxiosInstance"
import { useRemoveSlider } from "../../../hooks/shops_slider/useRemoveSlider"

export const CreateSlider = () => {
    const { t } = useTranslation()
    const [sliderParams, setSliderParams] = useState<any>({})
    const { sliderImages, fetchSliders } = useSlider()
    const { createSlider } = useCreateSlider()
    const { removeSlider } = useRemoveSlider()

    const handleSliderSave = () => {
        createSlider(sliderParams)
    }
    const handleDeleteImage = (id: Number) => {
        removeSlider(id)
        window.location.reload()
    }
    useEffect(() => {
        fetchSliders()
    }, [])
    return (
        <>
            <Typography className="component-title">{t('admin.shop_slider.slider')}</Typography>
            <Stack direction={'row'} gap={'10px'}>
                <input type="text" className="custom-input"
                    onChange={(e: any) => setSliderParams({ ...sliderParams, header: e.target.value })}
                    placeholder={t('admin.shop_slider.photo')}
                />
                <input type="file"
                    onChange={(e: any) => setSliderParams({ ...sliderParams, image: e.target.files[0] })}
                    className="custom-input"

                    placeholder={t('admin.shop_slider.head')}
                />
            </Stack>
            <button className="admin-button"
                onClick={handleSliderSave}
            >{t('admin.save')}</button>
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    gap={'10px'}
                    flexWrap={'wrap'}
                >
                    {sliderImages && sliderImages.map((e: any) => {
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
                                    onClick={() => handleDeleteImage(e.id)}
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