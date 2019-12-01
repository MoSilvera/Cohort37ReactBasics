import React from 'react'
import { AnimalProvider } from './AnimalProvider'
import { LocationProvider } from './LocationProvider'

export const ComplexAnimalProvider = (props) => {

    return (
        <AnimalProvider>
            <LocationProvider>
                {props.children}
            </LocationProvider>
        </AnimalProvider>
    )
}