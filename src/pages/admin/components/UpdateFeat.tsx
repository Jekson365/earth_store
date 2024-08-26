import { Box, Typography, Stack } from "@mui/material"
import { useFeaturedProducts } from "../../../hooks/featured_products/useFeaturedProducts"
import { useRemoveFeatProducts } from "../../../hooks/featured_products/useRemoveFeatProducts"
import { useCreateFeatProducts } from "../../../hooks/featured_products/useCreateFeatProducts"
import { useEffect, useState } from "react"
import { useProducts } from "../../../hooks/products/useProducts"
import { FeaturedItem } from "../../../cusomts/FeaturedItem"

export const UpdateFeat = () => {
    const { featuredProducts, fetchFeaturedProducts } = useFeaturedProducts()
    const { removeFeat } = useRemoveFeatProducts()
    const { createFeat } = useCreateFeatProducts()
    const { products, fetchProducts } = useProducts()

    const [featItem, setFeatItem] = useState<any>({})

    const [sliderCount] = useState(JSON.parse(localStorage.getItem('slider_per_view') || '0'))

    useEffect(() => {
        fetchFeaturedProducts()
        fetchProducts()
    }, [])

    const counts = [2, 3, 4, 5]

    const handleSliderCount = (number: Number) => {
        localStorage.setItem('slider_per_view', JSON.stringify(number))
        window.location.reload()
    }
    useEffect(() => {
        console.log(featItem)
    }, [featItem])

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
                        <option value="">Choose Featured Product</option>
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
                                <FeaturedItem
                                    id={e.id}
                                    content={e.product.title}
                                    action={removeFeat}
                                ></FeaturedItem>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={2}>
                    <button className="admin-button"
                        onClick={() => createFeat(featItem)}
                    >SAVE</button>
                </Box>
                <Box mt={3}>
                    <Typography>Slider Per View</Typography>
                    <Stack direction={'row'} gap={'10px'} width={'100%'} mt={1}>
                        {counts.map((e) => {
                            return (
                                <>
                                    <Box
                                        className={`feat-slider-count ${e === sliderCount ? 'selected' : ''}`}
                                        onClick={() => handleSliderCount(e)}
                                    >
                                        {e}
                                    </Box>
                                </>
                            )
                        })}
                    </Stack>
                </Box>
            </Box>
        </>
    )
}  