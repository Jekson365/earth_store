import { Stack } from '@mui/material'
import '../../styles/auth/auth.scss'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useRegister } from '../../hooks/users/useRegister'
import { CurrentUser } from '../../App'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function Register() {
    const { useCreateUser } = useRegister()
    const { currentUser } = useContext<any>(CurrentUser)
    const [user, setUser] = useState({})
    const { t } = useTranslation()
    const [registerData, setRegisterData] = useState(
        {
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    )
    useEffect(() => {
        setUser(Object.keys(currentUser).length === 0 ? false : currentUser)
        if (user == false) {
            window.location.href = '/'
        }
    }, [currentUser])
    const location = useLocation()
    const applyShopStyles = () => {
        document.documentElement.style.setProperty('--nav-item-color', 'black');
    };

    useEffect(() => {
        if (location.pathname === '/register') {
            applyShopStyles();
        }
    }, [location.pathname]);

    if (location.pathname === '/register') {
        applyShopStyles();
    }
    return (
        <>
            <div className="cover">
                <div className="box">
                    <Stack direction={'column'} width={'100%'} gap={'25px'} alignItems={'center'}>
                        <h1>EARTH STORE</h1>
                        <Stack
                            direction={'column'}
                            alignItems={'center'}
                            gap={'20px'}
                            width={'100%'}
                        >
                            <input type="email" className="custom-input" placeholder={t('auth.email')} typeof='email'
                                onChange={(e: any) => setRegisterData({ ...registerData, email: e.target.value })}
                            />
                            <input type="password" className="custom-input" placeholder={t('auth.password')}
                                onChange={(e: any) => setRegisterData({ ...registerData, password: e.target.value })}
                            />
                            <input type="password" className="custom-input" placeholder={t('auth.repeat_password')}
                                onChange={(e: any) => setRegisterData({ ...registerData, password_confirmation: e.target.value })}
                            />
                            <button className="main-button"
                                onClick={() => useCreateUser(registerData)}
                            >{t('auth.register')}</button>
                        </Stack>
                        <Link to={'/login'} className='register-href'

                        >{t('auth.login')}</Link>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Register