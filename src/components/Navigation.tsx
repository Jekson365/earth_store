import '../styles/partials/navigation.scss'
import { Stack, Typography, Box, Alert, Snackbar } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import { CartController } from "../router/CustomRouter.tsx";
import { CurrentUser } from '../App.tsx';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
    const { t, i18n } = useTranslation()
    const [navOpen, setNavOpen] = useState<Boolean>(false)
    const { setCart } = useContext<any>(CartController)
    const { currentUser } = useContext<any>(CurrentUser)
    const [user, setUser] = useState<any>({})
    const [currentLan] = useState(localStorage.getItem('lang') || '')

    const logoutUser = () => {
        localStorage.removeItem("token")
        window.location.href = '/'
    }
    useEffect(() => {
        i18n.changeLanguage(currentLan)
    }, [])

    useEffect(()=> {
        localStorage.setItem('lang',"ka")
    },[])
    useEffect(() => {
        setUser(Object.keys(currentUser).length === 0 ? false : currentUser)
    }, [currentUser])
    
    return (
        <>
            {Object.keys(currentUser).length !== 0 && currentUser.confirmed_at == null ? (<>
                <Snackbar open={true}>
                    <Alert variant='filled' severity='error'>
                        მომხმარებელი არ არის ავტორიზებული,შეამოწმეთ ფოსტა
                    </Alert>
                </Snackbar>
            </>) : null}
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
                            <Link className={'nav-name'} to={'/'}>{t('home')}</Link>
                            <Link className={'nav-name'} to={'/about'}>{t('about')}</Link>
                            <Link className={'nav-name'} to={'/shop'}>{t('shop')}</Link>
                            <Link className={'nav-name'} to={'/contact'}>{t('contact')}</Link>
                            {/* <button
                                onClick={setLnaguage}
                            >{currentLan}</button> */}
                            {!user && window.innerWidth < 900 ? (<>
                                <Link className={'nav-name'} to={'/login'}>{t('auth.register')}</Link>
                                <Link className={'nav-name'} to={'/register'}>{t('auth.login')}</Link>
                            </>) : null}
                        </Stack>
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                            {user.role && user.role.id == 2 ?
                                (
                                    <>
                                        <Link
                                            to={'/admin'}
                                        >
                                            <SettingsIcon className={'nav-icon icon'}
                                                sx={{ fontSize: "30px" }}
                                            />
                                        </Link>
                                    </>
                                )
                                : null}
                            {Object.keys(currentUser).length > 0 ? (<>
                                <Box
                                    onClick={() => setCart(true)}
                                >
                                    <ShoppingBag className={'nav-icon icon white-icon'}
                                        sx={{ fontSize: "30px" }}
                                    />
                                </Box>
                            </>) : <></>}
                            <Box>
                                {user ? (<>
                                    <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                                        <Box
                                            className='white-icon email'
                                        >
                                            <div className="user-popup">
                                                <Stack direction={'column'}
                                                    gap={'10px'}
                                                    alignItems={'flex-start'}
                                                >
                                                    <Typography
                                                        color={'black'}
                                                    >{currentUser && currentUser.username}</Typography>
                                                    <Typography
                                                        color={'black'}
                                                    >{currentUser && currentUser.email}</Typography>
                                                    <Stack
                                                        color={'black'}
                                                        direction={'row'}
                                                        alignItems={'center'}
                                                        gap={'10px'}
                                                    >
                                                        <Box
                                                            style={{
                                                                width: "15px",
                                                                height: "15px",
                                                                borderRadius: "50%",
                                                                background: "green"
                                                            }}
                                                        ></Box>
                                                        <Typography>
                                                            {currentUser && currentUser.role && currentUser.role.name}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography
                                                        className='logout-button'
                                                        onClick={logoutUser}
                                                        style={{ fontWeight: "bold", cursor: "pointer" }}
                                                    >
                                                        {t('logout')}
                                                    </Typography>
                                                </Stack>
                                            </div>
                                        </Box>
                                    </Stack>
                                </>) :
                                    <>
                                        <Link to={'/register'}>
                                            <PersonIcon
                                                className={'nav-icon icon person white-icon'}
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
            </div >
        </>
    )
}