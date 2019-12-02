import React, {useState, useEffect, useContext} from 'react'
import {AnimalContext} from '../providers/AnimalProvider'
import {UserAnimalContext} from '../providers/UserAnimalProvider'
import './Animal.css'


export default props => {

    let {animals} = useContext(AnimalContext)
    let {userAnimals} = useContext(UserAnimalContext)
    let currentAnimal = props.location.state.detail

    let users = userAnimals.filter(userAnimal => userAnimal.animalId === currentAnimal.id)
    console.log(users)



    console.log(currentAnimal.employee)
    return(
        <div className="animalDetail">
            <img className="detailImage" src={currentAnimal.img} alt={currentAnimal.name}/>
            <div className="animalDetailRight">
                <h1>Hi! My name is {currentAnimal.name}</h1>
                <h5>I am currently staying at {currentAnimal.location.name}</h5>
                <h5>{currentAnimal.employee.name} is taking care of me. </h5>
                <h5>I am a {currentAnimal.breed}</h5>
                <h5>Parents: {users.map(user => `${user.user.firstName} ${user.user.lastName}`).join(", ")}</h5>
            </div>
        </div>
    )
}