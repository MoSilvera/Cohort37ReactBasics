import React from 'react'
// import { Route } from 'react-router-dom'
import AuthCheckRoute from './auth/AuthCheckRoute'
import Home from './home/Home'
export default () => {
    return (
        <React.Fragment>
            <AuthCheckRoute exact path="/" Destination={Home} />
        </ React.Fragment>
    )
}