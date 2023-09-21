import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../boilerplate/Input';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../apollo/mutations'

export default function Register() {
    const methods = useForm()


    const [register, { error, reset }] = useMutation(REGISTER_USER)

    const onSubmit = methods.handleSubmit(async (e) => {
        try {
            await register({ variables: { email: e.email, password: e.password } })
        } catch (e) {
            console.log(e);
        }
    })

    return (
        <div className='content'>
            <FormProvider {...methods}>
                <form onSubmit={e => e.preventDefault()} style={{ marginTop: '200px', backgroundColor: 'white', width: '50%', minWidth: '400px' }}>
                    <div className="mb-3 border rounded pt-4 pb-4 px-4">
                        <p style={{ textAlign: 'center' }}>Sign Up</p>
                        <Input
                            label="First Name"
                            type="text"
                            id="firstname"
                            placeholder="Type your first name"
                            validation={{ required: true }}
                        />
                        <Input
                            label="Last Name"
                            type="text"
                            id="lastname"
                            placeholder="Type your last name"
                            validation={{ required: true }}
                        />
                        <Input
                            label="Email"
                            type="text"
                            id="email"
                            placeholder="Type your email"
                            validation={{ required: true }}
                        />
                        <Input

                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Type your password"
                            validation={{
                                required: true, minLength: {
                                    value: 6,
                                    message: "Length must be 6 characters or more"
                                },
                            }}
                        />
                        <button onClick={onSubmit} style={{ width: '100%' }}>Register</button>
                        {error && (<p>Email already in use</p>)}

                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

// export default function Register() {
//     return (
//         <div>
//             <FormContainer />
//         </div>
//     )
// }
