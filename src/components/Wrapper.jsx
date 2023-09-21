import React from 'react'
import Login from './Login'
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../apollo/queries'
import Home from './Home';


function TestQuery() {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
}


export default function Wrapper() {
    const { data } = useQuery(GET_CURRENT_USER);

    if (!data?.currentUser) {
        return (
            <>
                <Login />
            </>
        )
    } else {
        return (
            <>
                <Home />
            </>
        )
    }
}
