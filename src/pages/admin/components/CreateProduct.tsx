import { Box, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useCreateProduct } from "../../../hooks/products/useCreateProduct";
import { useCategories } from "../../../hooks/categories/useCategories";
import { CustomError } from "../../../components/CustomError";
import { useProducts } from "../../../hooks/products/useProducts";
import { useRemoveProduct } from "../../../hooks/products/useRemoveProduct";
import { FeaturedItem } from "../../../cusomts/FeaturedItem";

export const CreateProduct = () => {
    const { categories, fetchCategories } = useCategories();
    const { products, fetchProducts } = useProducts()
    const { removeProduct } = useRemoveProduct()
    const [open, setOpen] = useState(false);
    const [productParams, setProductParams] = useState<any>({
        title: null,
        description: null,
        price: null,
        category_id: "", // Default value for the select input
    });

    const handleImages = (event: any) => {
        event.preventDefault();
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

    const { createProduct } = useCreateProduct();

    const handleProductSave = (event: any) => {
        event.preventDefault();
        const { title, description, price, category_id, product_images_attributes } = productParams;
        if (!title || !description || !price || !category_id || !product_images_attributes) {
            setOpen(true);
        } else {
            createProduct(productParams);
            window.location.reload();
        }
    };

    useEffect(() => {
        fetchProducts()
        fetchCategories();
    }, []);

    return (
        <>
            <CustomError open={open} setOpen={setOpen} />
            <Box>
                <form encType="multipart/form-data">
                    <Typography className="component-title">Products</Typography>
                    <Stack direction={"row"} gap={"20px"} flexWrap={"wrap"} mt={1}>
                        <input
                            type="text"
                            onChange={(e) => setProductParams({ ...productParams, title: e.target.value })}
                            placeholder="title"
                            className="custom-input"
                        />
                        <input
                            type="number"
                            onChange={(e) => setProductParams({ ...productParams, price: e.target.value })}
                            placeholder="price"
                            className="custom-input"
                        />
                        <select
                            className="custom-input"
                            onChange={(e) => setProductParams({ ...productParams, category_id: e.target.value })}
                            style={{
                                background: "white",
                                minWidth: "300px",
                            }}
                            value={productParams.category_id}
                        >
                            <option value="" disabled>
                                Select Category
                            </option>
                            {categories &&
                                categories.map((category: any) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                        </select>
                        <input
                            type="file"
                            className="custom-input"
                            multiple
                            onChange={handleImages}
                        />
                        <textarea
                            className="custom-input"
                            onChange={(e) => setProductParams({ ...productParams, description: e.target.value })}
                            style={{ width: "100%" }}
                        ></textarea>
                    </Stack>
                    <Box mt={2}>
                        <Stack direction={'row'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
                            {products && products.map((e : any)=> {
                                return (
                                    <>
                                        <FeaturedItem
                                            id={e.id}
                                            content={e.title}
                                            action={removeProduct}
                                        >
                                        </FeaturedItem>
                                    </>
                                )
                            })}
                        </Stack>
                    </Box>
                    <Box mt={2}>
                        <button className="admin-button" onClick={handleProductSave}>
                            SAVE
                        </button>
                    </Box>
                </form>
            </Box>
        </>
    );
};
