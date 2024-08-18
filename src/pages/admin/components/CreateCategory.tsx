import { Box, Typography, Stack } from "@mui/material"
import { useCreateCategories } from "../../../hooks/categories/useCreateCategories"
import { useEffect, useState } from "react"
import { useCategories } from "../../../hooks/categories/useCategories"
import { useRemoveCategory } from "../../../hooks/categories/useRemoveCategory"

export const CreateCategory = () => {
    const { createCategory } = useCreateCategories()
    const { categories, fetchCategories } = useCategories()
    const { removeCategory } = useRemoveCategory()

    const [cat, setCat] = useState<any>({ name: "" })

    const handleSaveCat = () => {
        createCategory(cat)
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <>
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
                                <div className="featured-item"
                                    onClick={() => removeCategory(e.id)}
                                >
                                    {e.name}
                                </div>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="main-button"
                        onClick={handleSaveCat}
                    >SAVE</button>
                </Box>
            </Box>
        </>
    )
}