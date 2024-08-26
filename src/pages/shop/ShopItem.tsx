import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { defaultUrl } from "../../AxiosInstance"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useContext, useState } from "react";
import { useCreateCart } from "../../hooks/cart/useCreateCart";
import { CurrentUser } from "../../App";
import { CustomError } from "../../components/CustomError";

export const ShopItem = ({ product }: any) => {
    const { currentUser } = useContext<any>(CurrentUser)
    const { createCart } = useCreateCart()
    const [open, setOpen] = useState(false)

    const handleCart = (event: React.MouseEvent) => {
        event.preventDefault();

        createCart({ product_id: product.id, user_id: currentUser.id });
        setOpen(true)
    };

    return (
        <>
            <CustomError open={open} setOpen={setOpen} message="added to cart" severity="success" />
            <Link to={`/product/${product.id}`}>
                <Box
                    className='product-image'
                    style={{
                        backgroundImage: `url('${defaultUrl}${product.product_images.length > 0 ? product.product_images[0].image.url : ''}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        minWidth: "250px",
                        minHeight: "250px",
                        position: "relative"
                    }}
                >
                    <div className="add-cart-button"
                        onClick={(e) => handleCart(e)}
                    >
                        <ShoppingBagIcon />
                    </div>
                </Box>
                <Stack direction={'column'} gap={'5px'}>
                    <Typography
                        mt={1}
                        style={{ fontSize: "13px", color: "gray" }}
                    >{product.category.name}</Typography>
                    <Typography mt={1}
                        color={'black'}
                    >{product.title}</Typography>
                    <Stack direction={'row'} gap={'10px'}>
                        <Typography
                            color={product.sale_price ? 'red' : "black"}
                            sx={{
                                textDecoration: product.sale_price ? 'line-through' : null,
                            }}
                        >{product.price}$</Typography>
                        {product.sale_price ? <Typography>{product.sale_price}$</Typography> : null}
                    </Stack>
                </Stack>
            </Link>
        </>
    )
}