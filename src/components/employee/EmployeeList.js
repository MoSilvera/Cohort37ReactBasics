import React, { useContext} from 'react'
import Employee from './Employee'
import { EmployeeContext } from '../providers/EmployeeProvider'


export default props => {
    //subscribes to changes in the animals value of the AnimalContext object
    let { employees } = useContext(EmployeeContext)

    //returns a location component for each location in value from the context object
    return(
        <React.Fragment>
           <div className="animalList">
                {employees.map(oneEmployee =>
                <Employee
                key={oneEmployee.id}
                employee={oneEmployee}
                animals={oneEmployee.animals}
                />)}
            </div>
        </React.Fragment>
    )
}