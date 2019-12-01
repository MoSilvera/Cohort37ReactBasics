import React, { useEffect, useContext,useState } from 'react'
import { AnimalContext } from '../providers/AnimalProvider'
import EmployeeRepository from '../../repositories/EmployeeRepository'

export default props => {
    //subscribes to changes in the animal value of the AnimalContext object
    const {animals} = useContext(AnimalContext)
    const [employee, setEmployee] = useState({})

    useEffect(()=> {
        EmployeeRepository.get(props.animal.employeeId)
        .then((res) => {

            setEmployee(res)})
    }, [props.animal.employeeId])


        return (
            <React.Fragment>
                <div className="card" style={{width: 12 + 'rem'}}>
                    <img src={props.animal.img} className="card-img-top" alt="dog"></img>
                    <div className="card-body">
                       <div className="cared-title">{props.animal.name}</div>
                        <div>Breed: {props.animal.breed}</div>
                        <div> Caretaker: {employee.name}</div>
                    </div>
                </div>
            </React.Fragment>

        )


}