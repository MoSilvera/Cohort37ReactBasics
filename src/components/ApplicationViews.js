import React from 'react'
// import { Route } from 'react-router-dom'
import AuthCheckRoute from './auth/AuthCheckRoute'
import Home from './home/Home'
import {AnimalProvider} from './providers/AnimalProvider'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import {ComplexAnimalProvider} from './providers/ComplexAnimalProvider'
import './Kennel.css'

export default () => {

    //The providers are the context components. Any child of those providers will have access to the value props
    //The Auth check component will return either the destination component or the login component depending on user authorization
    return (
        <React.Fragment>
            <AuthCheckRoute exact path="/" Destination={Home} />

            <AnimalProvider>
                <AuthCheckRoute exact path="/animals" Destination={AnimalList}/>
            </AnimalProvider>

            <ComplexAnimalProvider>
                <AuthCheckRoute exact path="/locations" Destination={LocationList}/>
            </ComplexAnimalProvider>

        </ React.Fragment>
    )
}