import { Box, Typography, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { useCreateProduct } from "../../../hooks/products/useCreateProduct";
import { useCategories } from "../../../hooks/categories/useCategories";
import { CustomError } from "../../../components/CustomError";

export const CreateProduct = () => {
    const { categories, fetchCategories } = useCategories()
    const [open, setOpen] = useState(false)
    const [productParams, setProductParams] = useState<any>({
        title: null,
        description: null,
        price: null,
        category_id: null
    })
    const handleImages = (event: any) => {
        event.preventDefault()
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map(file => ({
                image: file,
            }));

            setProductParams((prevParams: any) => ({
                ...prevParams,
                product_images_attributes: [
                    ...(prevParams.product_images_attributes || []).map((imageObj: any) => {
                        return { image: imageObj.image || imageObj.file };
                    }),
                    ...filesArray,
                ],
            }));
        }
    };
    const { createProduct } = useCreateProduct()

    const handleProductSave = (event: any) => {
        event.preventDefault()
        const { title, description, price, category_id, product_images_attributes } = productParams
        if (!title || !description || !price || !category_id || !product_images_attributes) {
            setOpen(true)
        } else {
            createProduct(productParams)
            window.location.reload()
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <>
            <CustomError open={open} setOpen={setOpen} />
            <Box>
                <form encType="multipart/form-data">
                    <Typography className="component-title">Products</Typography>
                    <Stack direction={'row'} gap={'20px'} flexWrap={'wrap'} mt={1}>
                        <input type="text"
                            onChange={(e) => setProductParams({ ...productParams, title: e.target.value })}
                            placeholder="title"
                            className="custom-input" />
                        <input type="number"
                            onChange={(e) => setProductParams({ ...productParams, price: e.target.value })}
                            placeholder="price" className="custom-input" />
                        <select className="custom-input"
                            onChange={(e) => setProductParams({ ...productParams, category_id: e.target.value })}
                            style={{
                                background: "white",
                                minWidth: "300px",
                            }}
                        >
                            {categories && categories.map((e: any) => {
                                return (
                                    <>
                                        <option value={e.id}>{e.name}</option>
                                    </>
                                )
                            })}
                        </select>
                        <input type="file" className="custom-input"
                            multiple
                            onChange={handleImages}
                        />
                        <textarea className="custom-input"
                            onChange={(e) => setProductParams({ ...productParams, description: e.target.value })}

                            style={{ width: "100%" }}
                        ></textarea>
                    </Stack>
                    <Box mt={2}>
                        <button className="main-button"
                            onClick={handleProductSave}
                        >SAVE</button>
                    </Box>
                </form>
            </Box>
        </>
    )
}