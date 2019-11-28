import React from 'react'
import { Route } from 'react-router-dom'
import AuthCheckRoute from './auth/AuthCheckRoute'
export default () => {
    return (
        <React.Fragment>
            <AuthCheckRoute exact path="home" Destination={Home} />
        </ React.Fragment>
    )
}