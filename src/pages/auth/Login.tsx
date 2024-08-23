import { Stack } from '@mui/material'
import '../../styles/auth/auth.scss'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/users/useLogin'
import { useContext, useEffect, useState } from 'react'
import { CurrentUser } from '../../App'
import { useLocation } from 'react-router-dom'

function Register() {
    const { useLoginUser } = useLogin()
    const { currentUser } = useContext<any>(CurrentUser)
    const [user, setUser] = useState()


    const [loginParams, setLoginParams] = useState<any>({
        email: "",
        password: ""
    })
    useEffect(() => {
        setUser(Object.keys(currentUser).length === 0 ? false : currentUser)
        if (user) {
            window.location.href = '/'
        }
    }, [currentUser])


    const location = useLocation()
    const applyShopStyles = () => {
        document.documentElement.style.setProperty('--nav-item-color', 'black');
    };

    useEffect(() => {
        if (location.pathname === '/login') {
            applyShopStyles();
        }
    }, [location.pathname]);

    if (location.pathname === '/login') {
        applyShopStyles();
    }
    return (
        <>
            <div className="cover">
                <div className="box">
                    <Stack direction={'column'} gap={'25px'} alignItems={'center'}>
                        <h1>EARTH STORE</h1>
                        <Stack
                            direction={'column'}
                            alignItems={'center'}
                            gap={'10px'}
                        >
                            <input
                                onChange={(e) => setLoginParams({ ...loginParams, email: e.target.value })}
                                type="text" className="custom-input" placeholder='email' typeof='email' />
                            <input type="password" className="custom-input" placeholder='password'
                                onChange={(e) => setLoginParams({ ...loginParams, password: e.target.value })}
                            />
                            <button className="main-button"
                                style={{
                                    width: "100%"
                                }}
                                onClick={() => useLoginUser(loginParams)}
                            >LOGIN</button>
                        </Stack>
                        <Link to={'/register'} className='register-href'>Register</Link>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Register