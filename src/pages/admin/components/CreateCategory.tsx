import { Box, Typography, Stack } from "@mui/material"
import { useCreateCategories } from "../../../hooks/categories/useCreateCategories"
import { useEffect, useState } from "react"
import { useCategories } from "../../../hooks/categories/useCategories"
import { useRemoveCategory } from "../../../hooks/categories/useRemoveCategory"
import { CustomError } from "../../../components/CustomError"
import { FeaturedItem } from "../../../cusomts/FeaturedItem"

export const CreateCategory = () => {
    const { createCategory } = useCreateCategories()
    const { categories, fetchCategories } = useCategories()
    const { removeCategory } = useRemoveCategory()
    const [open, setOpen] = useState(false)

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
                <Typography className="component-title">Categories</Typography>
                <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                    <input
                        onChange={(e) => setCat({ name: e.target.value })}
                        type="text" placeholder="title" className="custom-input" />
                </Stack>
                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {categories && categories.map((e: any) => {
                        return (
                            <>
                                <FeaturedItem
                                    id={e.id}
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
                    >SAVE</button>
                </Box>
            </Box>
        </>
    )
}