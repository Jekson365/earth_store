import { Stack } from '@mui/material'
import '../../styles/auth/auth.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useRegister } from '../../hooks/users/useRegister'


function Register() {
    const { useCreateUser } = useRegister()
    const [registerData, setRegisterData] = useState(
        {
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    )
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
                            <input type="email" className="custom-input" placeholder='email' typeof='email'
                                onChange={(e: any) => setRegisterData({ ...registerData, email: e.target.value })}
                            />
                            <input type="password" className="custom-input" placeholder='password'
                                onChange={(e: any) => setRegisterData({ ...registerData, password: e.target.value })}
                            />
                            <input type="password" className="custom-input" placeholder='repeat-password'
                                onChange={(e: any) => setRegisterData({ ...registerData, password_confirmation: e.target.value })}
                            />
                            <button className="main-button"
                                style={{
                                    width: "100%"
                                }}
                                onClick={()=> useCreateUser(registerData)}
                            >REGISTER</button>
                        </Stack>
                        <Link to={'/login'} className='register-href'
                           
                        >Login</Link>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Register