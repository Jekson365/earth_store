import '../styles/partials/navigation.scss'
import { Stack, Typography, Box } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import { CartController } from "../router/CustomRouter.tsx";
import { CurrentUser } from '../App.tsx';
import LogoutIcon from '@mui/icons-material/Logout';

export const Navigation = () => {
    const [navOpen, setNavOpen] = useState<Boolean>(false)
    const { setCart } = useContext<any>(CartController)
    const { currentUser } = useContext<any>(CurrentUser)
    const [user,setUser] = useState<any>({})
    const logoutUser = () => {
        localStorage.removeItem("token")
        window.location.href = '/'
    }
    useEffect(() => {
        setUser(Object.keys(currentUser).length === 0 ? false : currentUser)
    }, [currentUser])
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
                            {!user && window.innerWidth < 900 ? (<>
                                <Link className={'nav-name'} to={'/login'}>LOGIN</Link>
                                <Link className={'nav-name'} to={'/register'}>REGISTER</Link>
                            </>) : null}
                        </Stack>
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                            {user.role_id == 2 ?
                                (
                                    <>
                                        <Link
                                            to={'/admin'}
                                        >
                                            <SettingsIcon className={'icon'}
                                                sx={{ fontSize: "30px" }}
                                            />
                                        </Link>
                                    </>
                                )
                                : null}
                            <Box
                                onClick={() => setCart(true)}
                            >
                                <ShoppingBag className={'icon'}
                                    sx={{ fontSize: "30px" }}
                                />
                            </Box>
                            <Box>
                                {user ? (<>
                                    <Stack direction={'row'}>
                                        <Box
                                            onClick={logoutUser}
                                            style={{ fontWeight: "bold", cursor: "pointer" }}
                                        >
                                            <LogoutIcon />
                                        </Box>
                                        <Typography ml={1}>{user.email}</Typography>
                                    </Stack>
                                </>) :
                                    <>
                                        <Link to={'/register'}>
                                            <PersonIcon className={'icon person'}
                                                sx={{ fontSize: "30px" }}
                                            />
                                        </Link>

                                    </>
                                }
                            </Box>
                            <Box
                                onClick={() => setNavOpen(!navOpen)}
                            >
                                <DehazeIcon className={'set-nav'}

                                    sx={{ fontSize: "30px" }}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                </Stack>
            </div>
        </>
    )
}