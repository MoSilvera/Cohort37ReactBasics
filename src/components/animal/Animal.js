import React, { useEffect, useContext } from 'react'
import { AnimalContext } from '../providers/AnimalProvider'

export default props => {
    const {animals} = useContext(AnimalContext)

    const animal = props.animal

    return (
        <React.Fragment>
            <div>
                <h4>{animal.name}</h4>
                    <img alt={animal.name} src={animal.img}></img>
                    <p>Breed: {animal.breed}</p>
            </div>
        </React.Fragment>
    )
}