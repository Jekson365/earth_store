import '../styles/cart.scss'
import { Box, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { CartController } from "../router/CustomRouter.tsx";
export const Cart = () => {
    const { cart, setCart } = useContext<any>(CartController)
    const data = [
        {
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
            title: "Poster V2",
            amount: "2",
            price: "17.99"
        },
        {
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
            title: "Poster V2",
            amount: "2",
            price: "17.99"
        },
        {
            img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
            title: "Poster V2",
            amount: "2",
            price: "17.99"
        },
    ]
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
                        >
                            {data.map((e) => {
                                return (
                                    <>
                                        <Stack
                                            direction={'row'}
                                            gap={'20px'}
                                            position={'relative'}
                                            alignItems={'center'}
                                        >
                                            <img src={e.img}
                                                width={'70px'}
                                                height={'70px'}
                                            />
                                            <Stack direction={'column'} gap={'15px'}>
                                                <p className={'cart-item-title'}>{e.title}</p>
                                                <p className={'cart-item-price'}>{e.amount} x ${e.price}</p>
                                            </Stack>
                                            <div className={'close'}

                                            >
                                                <CloseIcon style={{ fontSize: "5px" }} />
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
                            <button className={'main-button'}>CHECKOUT</button>
                        </Stack>
                    </Box>
                </Stack>
            </div>
        </>
    )
}