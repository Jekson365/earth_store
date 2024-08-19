import { Box, Typography, Stack } from "@mui/material"
import { useFeaturedProducts } from "../../../hooks/featured_products/useFeaturedProducts"
import { useRemoveFeatProducts } from "../../../hooks/featured_products/useRemoveFeatProducts"
import { useCreateFeatProducts } from "../../../hooks/featured_products/useCreateFeatProducts"
import { useEffect, useState } from "react"
import { useProducts } from "../../../hooks/products/useProducts"

export const UpdateFeat = () => {
    const { featuredProducts, fetchFeaturedProducts } = useFeaturedProducts()
    const { removeFeat } = useRemoveFeatProducts()
    const { createFeat } = useCreateFeatProducts()
    const { products, fetchProducts } = useProducts()

    const [featItem, setFeatItem] = useState<any>({})

    useEffect(() => {
        fetchFeaturedProducts()
        fetchProducts()
    }, [])

    return (
        <>
            <Box>
                <Typography className="component-title">Featured</Typography>
                <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                    <select className="custom-input"
                        style={{
                            background: "white",
                            minWidth: "300px",
                        }}
                        onChange={(e: any) => setFeatItem(e.target.value)}
                    >
                        {products && products.map((e: any) => {
                            return (
                                <>
                                    <option value={e.id}>{e.title}</option>
                                </>
                            )
                        })}
                    </select>
                </Stack>
                <Stack direction={'row'} mt={3} gap={'20px'} flexWrap={'wrap'}>
                    {featuredProducts && featuredProducts.map((e: any) => {
                        return (
                            <>
                                <div className="featured-item"
                                    onClick={() => removeFeat(e.id)}
                                >
                                    {e.product.title}
                                </div>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="main-button"
                        onClick={() => createFeat(featItem)}
                    >SAVE</button>
                </Box>
            </Box>
        </>
    )
}  