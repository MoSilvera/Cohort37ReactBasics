import React from 'react'
// import { Route } from 'react-router-dom'
import AuthCheckRoute from './auth/AuthCheckRoute'
import Home from './home/Home'
import {AnimalProvider} from './providers/AnimalProvider'
import AnimalList from './animal/AnimalList'
import './Kennel.css'

export default () => {
    return (
        <React.Fragment>
            <AuthCheckRoute exact path="/" Destination={Home} />

            <AnimalProvider>
                <AuthCheckRoute exact path="/animals" Destination={AnimalList}/>
            </AnimalProvider>
        </ React.Fragment>
    )
}