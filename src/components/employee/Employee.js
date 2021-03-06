import React, { useEffect, useContext, useState } from 'react'
import LocationRepository from '../../repositories/LocationRepository'

export default props => {
    // this will not work until the employee is rendered by the list which is rendered by the context
    // const {employees} = useContext(EmployeeContext)
    const [location, setLocation] = useState({})

    useEffect(()=> {
        LocationRepository.get(props.employee.locationId)
        .then((res) => {
            setLocation(res)})
    }, [props.employee.locationId])

    const animalsCheck = (x) => {
        if(x !== undefined){
            return(
                <React.Fragment>
                    <div>Furry Friends:</div>
                    <div>{x.map(animal => <span key={animal.id}>{animal.name} </span>)}</div>
                </React.Fragment>
            )
        }

    }
        return (
            <React.Fragment>
                <div className="card" style={{width: 12 + 'rem'}}>
                    <img src="https://www.clipartwiki.com/clipimg/detail/301-3019873_employees-icon-clipart-png-download-employees-icon.png" className="card-img-top" alt="employee icon"></img>
                    <div className="card-body">
                       <div className="card-title">{props.employee.name}</div>
                        <div >Location: {location.name}</div>
                        <div>{animalsCheck(props.employee.animals)}</div>
                    </div>
                </div>
            </React.Fragment>

        )


}