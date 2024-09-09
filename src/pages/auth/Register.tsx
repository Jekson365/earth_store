import { Stack } from '@mui/material'
import '../../styles/auth/auth.scss'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useRegister } from '../../hooks/users/useRegister'
import { CurrentUser } from '../../App'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CustomError } from '../../components/CustomError'


function Register() {
    const { useCreateUser, result } = useRegister()
    const { currentUser } = useContext<any>(CurrentUser)
    const [user, setUser] = useState({})
    const [open, setOpen] = useState(false)
    const [errorData, setErrorData] = useState<any>({})
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

    const handleRegister = () => {
        try {
            useCreateUser(registerData)
        }
        catch (err) {
            throw err
        }
    }
    useEffect(() => {
        if (result?.response?.status === 409) {
            setOpen(true)
            setErrorData({ message: 'იუზერი უკვე არსებობს', severity: "error" })
        }
        if (result?.response?.status === 401) {
            setOpen(true)
            setErrorData({ message: 'პაროლები არ ემთხვევა ერთმანეთს', severity: "error" })
        }
        console.log(result)
        if (result?.status === 201 || result?.status === 200) {
            window.location.href = '/login'
        }
    }, [result])
    return (
        <>
            <CustomError open={open} setOpen={setOpen} message={errorData.message} severity={errorData.severity} />
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
                                onClick={handleRegister}
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