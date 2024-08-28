import { Box, Typography, Stack } from "@mui/material"
import { useCreateCategories } from "../../../hooks/categories/useCreateCategories"
import { useEffect, useState } from "react"
import { useCategories } from "../../../hooks/categories/useCategories"
import { useRemoveCategory } from "../../../hooks/categories/useRemoveCategory"
import { CustomError } from "../../../components/CustomError"
import { FeaturedItem } from "../../../cusomts/FeaturedItem"
import { useTranslation } from "react-i18next"

export const CreateCategory = () => {
    const { createCategory } = useCreateCategories()
    const { categories, fetchCategories } = useCategories()
    const { removeCategory } = useRemoveCategory()
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()

    const [cat, setCat] = useState<any>({ name: "" })

    const handleSaveCat = () => {
        if (!cat.name) {
            setOpen(true)
        }   
        else {
            createCategory(cat)
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <>
            <CustomError open={open} setOpen={setOpen} />
            <Box>
                <Typography className="component-title">{t('admin.categories')}</Typography>
                <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                    <input
                        onChange={(e) => setCat({ name: e.target.value })}
                        type="text" placeholder={t('admin.title')} className="custom-input" />
                </Stack>
                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {categories && categories.map((e: any) => {
                        return (
                            <>
                                <FeaturedItem
                                    product={e}
                                    content={e.name}
                                    action={removeCategory}
                                >
                                </FeaturedItem>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="admin-button"
                        onClick={handleSaveCat}
                    >{t('admin.save')}</button>
                </Box>
            </Box>
        </>
    )
}