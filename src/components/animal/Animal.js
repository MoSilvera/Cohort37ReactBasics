import React, { useEffect, useContext, useState } from 'react'
import { AnimalContext } from '../providers/AnimalProvider'
import EmployeeRepository from '../../repositories/EmployeeRepository'
import { Button } from 'reactstrap'

export default props => {
    //subscribes to changes in the animal value of the AnimalContext object
    let { animals } = useContext(AnimalContext)
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        EmployeeRepository.get(props.animal.employeeId)
            .then((res) => {

                setEmployee(res)
            })
    }, [props.animal.employeeId])


    return (
        <React.Fragment>
            <div className="card" style={{ width: 10 + 'rem' }}>
                <img src={props.animal.img} className="card-img-top" alt="dog"></img>
                <div className="card-body">
                    <h6 className="cared-title">{props.animal.name}</h6>
                    <div>Breed: {props.animal.breed}</div>
                    <div> Caretaker: {employee.name}</div>
                </div>
                <Button onClick={() => props.history.push({ pathname: `/animals/${props.animal.id}`, state: { detail: props.animal } })}>About Me!</Button>
            </div>
        </React.Fragment>

    )


}