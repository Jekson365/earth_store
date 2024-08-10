import '../styles/partials/navigation.scss'
import {Stack, Typography, Box} from "@mui/material";
import {ShoppingBag} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CartController} from "../router/CustomRouter.tsx";
export const Navigation = () => {
    const [navOpen,setNavOpen] = useState<Boolean>(false)
    const {setCart} = useContext<any>(CartController)
    return (
        <>
            <div className={'navigation'}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={2}
                    mt={2}
                >
                    <Typography className={'title'}>
                        <Link to={'/'}>
                            EARTH STORE
                        </Link>
                    </Typography>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={'30px'}
                    >
                        <Stack
                            display={navOpen ? 'none' : "flex"}
                            className={'responsive-nav'} direction={'row'} gap={'30px'}>
                            <Link className={'nav-name'} to={'/'}>HOME</Link>
                            <Link className={'nav-name'} to={'/about'}>ABOUT</Link>
                            <Link className={'nav-name'} to={'/shop'}>SHOP</Link>
                            <Link className={'nav-name'} to={'/contact'}>CONTACT</Link>
                        </Stack>
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                            <Box
                                onClick={()=> setCart(true)}
                            >
                                <ShoppingBag className={'icon'}
                                             sx={{fontSize: "30px"}}
                                />
                            </Box>
                            <Box>
                                <PersonIcon className={'icon person'}
                                            sx={{fontSize: "30px"}}
                                />
                            </Box>
                            <Box
                                onClick={()=>setNavOpen(!navOpen)}
                            >
                                <DehazeIcon className={'set-nav'}

                                            sx={{fontSize: "30px"}}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                </Stack>
            </div>
        </>
    )
}