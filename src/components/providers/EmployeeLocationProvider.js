import React from 'react'
import { LocationProvider } from './LocationProvider'
import { EmployeeProvider }  from './EmployeeProvider'

export const EmployeeLocationProvider = props => {

    return (
        <LocationProvider>
            <EmployeeProvider>
                {props.children}
            </EmployeeProvider>
        </LocationProvider>
    )
}