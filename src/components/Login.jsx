import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../boilerplate/Input'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../apollo/mutations'


export default function Login() {
    const methods = useForm()

    const [login, { error, reset }] = useMutation(LOGIN);



    const onSubmit = methods.handleSubmit(async (e) => {
        login({ variables: { email: e.email, password: e.password } })

    })

    return (
        <div className='content ' >
            <FormProvider {...methods} >
                <form onSubmit={e => e.preventDefault()} style={{ marginTop: '200px', backgroundColor: 'white', width: '50%', minWidth: '400px' }}>
                    <div className="mb-3 border rounded pt-4 pb-4 px-4">
                        <p style={{ textAlign: 'center' }}>Login</p>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            placeholder="type your email..."
                            validation={{ required: { value: true, message: 'Email required' } }}
                        />
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="type your password..."
                            validation={{ required: { value: true, message: 'Password required' } }}
                        />
                        <button className='' onClick={onSubmit} style={{ width: '100%' }}>Submit</button>
                        {error && (<p>Whoops! Something went wrong</p>)}
                    </div>

                </form>
            </FormProvider>
            <div className='content'>
                <Link to="/register">Register</Link>
                <Link to="forgot-password">Forgot Password</Link>
            </div>
            <Routes>
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>

    );
}

