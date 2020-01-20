import React, {useState, useEffect, useContext} from 'react'
import {AnimalContext} from '../providers/AnimalProvider'
import {UserAnimalContext} from '../providers/UserAnimalProvider'
import './Animal.css'
import {withRouter} from 'react-router-dom'


const AnimalDetail = props => {

    let {animals} = useContext(AnimalContext)
    let {userAnimals} = useContext(UserAnimalContext)
    let currentAnimal = props.location.state.detail

    let users = userAnimals.filter(userAnimal => userAnimal.animalId === currentAnimal.id)

    let locationName = ""
    let employeeName = ""

    if (currentAnimal.location === undefined){
        locationName = "unspecified"
    }
    else{
        locationName = currentAnimal.location.name
    }
    if(currentAnimal.employee === undefined){
        employeeName = "unspecified"
    }
    else{
        employeeName = currentAnimal.employee.name
    }

    return(
        <div className="animalDetail">
            <img className="detailImage" src={currentAnimal.img} alt={currentAnimal.name}/>
            <div className="animalDetailRight">
                <h1>Hi! My name is {currentAnimal.name} </h1>
                <h5>I am currently staying at {locationName}</h5>
                <h5>{employeeName} is taking care of me. </h5>
                <h5>My breed is:{currentAnimal.breed}</h5>
                <h5>Parents: {users.map(user => `${user.user.firstName} ${user.user.lastName}`).join(", ")}</h5>
            </div>
        </div>
    )
}

export default withRouter(AnimalDetail)