import React from 'react'
import { UserProvider } from './UserProvider'
import { UserAnimalProvider }  from './UserAnimalProvider'

export const ComplexUserProvider = props => {

    return (
        <UserProvider>
            <UserAnimalProvider>
                {props.children}
            </UserAnimalProvider>
        </UserProvider>
    )
}