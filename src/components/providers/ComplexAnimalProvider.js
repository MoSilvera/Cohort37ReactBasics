import React from 'react'
import { AnimalProvider } from './AnimalProvider'
import { LocationProvider } from './LocationProvider'
import { EmployeeProvider } from './EmployeeProvider'
import { UserAnimalProvider } from './UserAnimalProvider'

export const ComplexAnimalProvider = (props) => {

    //allows child components of the CAP to subscribe to changes in all of the available provider values 
    return (
        <AnimalProvider>
            <LocationProvider>
                <EmployeeProvider>
                    <UserAnimalProvider>
                        {props.children}
                    </UserAnimalProvider>
                </EmployeeProvider>
            </LocationProvider>
        </AnimalProvider>
    )
}