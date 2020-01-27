import React from 'react'
// import { Route } from 'react-router-dom'
import AuthCheckRoute from './auth/AuthCheckRoute'
import Home from './home/Home'
import {AnimalProvider} from './providers/AnimalProvider'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import {ComplexAnimalProvider} from './providers/ComplexAnimalProvider'
import './Kennel.css'
import EmployeeList from './employee/EmployeeList'
import UserList from './user/UserList'
import { ComplexUserProvider } from './providers/ComplexUserProvider'
import AnimalDetail from './animal/AnimalDetail'
import { EmployeeLocationProvider } from './providers/EmployeeLocationProvider'
import EmployeeForm from './employee/EmployeeForm'
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
                <AuthCheckRoute exact path="/locations" Destination={LocationList} />
                <AuthCheckRoute exact path="/animals/:animalId(\d+)" Destination={AnimalDetail}/>
            </ComplexAnimalProvider>

            <ComplexUserProvider>
                <AuthCheckRoute exact path="/owners" Destination={UserList}/>
            </ComplexUserProvider>

            <EmployeeLocationProvider>
                <AuthCheckRoute exact path="/employees/create" Destination={EmployeeForm} />
                <AuthCheckRoute exact path="/employees" Destination={EmployeeList} />
            </EmployeeLocationProvider>



        </ React.Fragment>
    )
}