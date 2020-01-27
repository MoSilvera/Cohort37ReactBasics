import React, { useContext, useRef } from "react"
import { EmployeeContext } from "../providers/EmployeeProvider"
import { LocationContext } from "../providers/LocationProvider"
import { AnimalContext } from '../providers/AnimalProvider'

export default props => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const { addAnimal } = useContext(AnimalContext)
    const animalName = useRef("")
    const animalLocation = useRef(0)
    const animalEmployee = useRef(0)
    const animalPhoto = useRef("")
    const animalBreed = useRef("")

    const constructNewEmployee = () => {
        const locationId = parseInt(animalLocation.current.value)
        const employeeId = parseInt(animalEmployee.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {

            addAnimal({
                name: animalName.current.value,
                locationId: locationId,
                employeeId: employeeId,
                breed: animalBreed.current.value,
                img: animalPhoto.current.value

            }).then(() => props.history.push("/animals"))

        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <div className="form-group">
                <label htmlFor="animalName">Animal name</label>
                <input
                    type="text"
                    id="animalName"
                    ref={animalName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Animal name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="animalBreed">Animal Breed</label>
                <input
                    type="text"
                    id="animalBreed"
                    ref={animalBreed}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Animal Breed"
                />
            </div>
            <div className="form-group">
                <label htmlFor="animalPhoto">Animal Photo URL</label>
                <input
                    type="text"
                    id="animalPhoto"
                    ref={animalPhoto}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Photo URL"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Assign to location</label>
                <select
                    defaultValue=""
                    name="location"
                    ref={animalLocation}
                    id="employeeLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="employee">Assign to Employee</label>
                <select
                    defaultValue=""
                    name="employee"
                    ref={animalEmployee}
                    id="animalEmployee"
                    className="form-control"
                >
                    <option value="0">Select an Employee</option>
                    {employees.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit"
                onClick={
                        evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                     }
                }
            className="btn btn-primary">
                Save Animal
                </button>
    </form>
    )
}