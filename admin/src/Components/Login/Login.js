import { TextField } from '@mui/material';
import React from 'react'
// import './login.scss';

const Login = () => {
    return (
        <div className='loginContainer '>
            <div className="loginWrapper">
                <div>
                    <p className='font-semibold'> Bookvala </p>
                </div>
                <div className='fields'>
                    <TextField
                        label='Username'
                        variant='standard'
                    />
                </div>
                <div className='fields'>
                    <TextField
                        type='password'
                        label='Password'
                        variant='standard'
                    />
                </div>
                <div>
                    <button>
                        Login in
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login