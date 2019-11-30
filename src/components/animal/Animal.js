import React, { useEffect, useContext } from 'react'
import { AnimalContext } from '../providers/AnimalProvider'

export default props => {
    const {animals} = useContext(AnimalContext)

    const animal = props.animal

    return (
        <React.Fragment>
            <div class="oneAnimal">
                <h4>{animal.name}</h4>
                   <div className="thumbnail"><img alt={animal.name} src={animal.img}></img></div> 
                    <p>Breed: {animal.breed}</p>
            </div>
        </React.Fragment>
    )
}