import React, { useState, useEffect } from 'react'
import EmployeeRepository from '../../repositories/EmployeeRepository'
//creating context object called AnimalContext
export const EmployeeContext = React.createContext()

export const EmployeeProvider = props => {


    const [employees, setEmployees] = useState([])

    //useEffect here will only be invoked on the FIRST render, because the second argument is an empty array
    //this means it will not be looking for changes in any state to trigger re-render?
    useEffect ( () => {
       getEmployees()
    }, [])

    const getEmployees = () => {
        EmployeeRepository.getAll()
        .then((employees) => {
            setEmployees(employees)
        })
    }

    const addEmployee = employee => {
        return fetch("http://localhost:3003/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }


    //returns a 'provider' component, this allows other components to 'subscribe' to this component
    //much like custom events, the components who are 'subscribed' to changes in the value props will then re-render
    //the value props will be sent to the children of the provider
    return(
        <EmployeeContext.Provider value ={{
            employees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}