import '../styles/cart.scss'
import { Box, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useEffect } from "react";
import { CartController } from "../router/CustomRouter.tsx";
import { useCart } from '../hooks/cart/useCart.tsx';
import { CurrentUser } from '../App.tsx';
import { defaultUrl } from '../AxiosInstance.ts';
import { useRemoveCart } from '../hooks/cart/useRemoveCart.tsx';
export const Cart = () => {
    const { cart, setCart } = useContext<any>(CartController)
    const { currentUser } = useContext<any>(CurrentUser)
    const { removeCart } = useRemoveCart()

    const { cartItems, fetchCart } = useCart()
    useEffect(() => {
        fetchCart({ user_id: currentUser.id })
    }, [cart, currentUser])

    const handleRemoveCartItem = (product_id: Number) => {
        removeCart({ user_id: currentUser.id, product_id: product_id })
        window.location.reload()
    }

    return (
        <>
            <div className={'overlay'}
                style={{ display: cart ? 'block' : 'none' }}
                onClick={() => setCart(false)}
            ></div>
            <div className={`cart ${cart ? 'cart-slide' : ''}`}>
                <Stack direction={'column'}
                    height={'100%'}
                    p={3}
                    justifyContent={'space-between'}>
                    <Box>
                        <Stack
                            direction={'row'} justifyContent={'space-between'}>
                            <p className={'title'}>Shopping Cart</p>
                            <Box onClick={() => setCart(false)}>
                                <CloseIcon />
                            </Box>
                        </Stack>
                        <Stack
                            direction={'column'}
                            gap={'20px'}
                            mt={5}
                            maxHeight={'550px'}
                            style={{
                                overflowX:"hidden",
                                overflowY:"auto"
                            }}
                        >
                            {cartItems && cartItems.map((e: any) => {
                                return (
                                    <>
                                        <Stack
                                            direction={'row'}
                                            gap={'20px'}
                                            position={'relative'}
                                            alignItems={'center'}
                                        >
                                            <img src={defaultUrl + e.image_url}
                                                width={'70px'}
                                                height={'70px'}
                                            />
                                            <Stack direction={'column'} gap={'15px'}>
                                                <p className={'cart-item-title'}>{e.title}</p>
                                                <p className={'cart-item-price'}>{e.product_count} x ${e.price}</p>
                                            </Stack>
                                            <div className={'close'}
                                                onClick={() => handleRemoveCartItem(e.product_id)}
                                            >
                                                <CloseIcon style={{ fontSize: "15px" }} />
                                            </div>
                                        </Stack>
                                    </>
                                )
                            })}
                        </Stack>
                    </Box>
                    <Box mb={5}>
                        <Stack
                            direction={'row'} justifyContent={'space-between'}
                            mb={5}
                        >
                            <p className={'title'}>Subtotal</p>
                            <p>$55.32</p>
                        </Stack>
                        <Stack gap={'20px'}>
                            <button className={'main-button'}>VIEW CART</button>
                        </Stack>
                    </Box>
                </Stack>
            </div>
        </>
    )
}