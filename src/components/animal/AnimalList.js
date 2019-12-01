import React, { useContext } from 'react'
import Animal from "./Animal"
import { AnimalContext } from '../providers/AnimalProvider'

//
export default props => {
    //subscribes to changes in the animals value of the AnimalContext object
    let { animals } = useContext(AnimalContext)

    //returns an animal component for each animal in value from the context object
    return(
        <React.Fragment>
           <div className="animalList">
                {animals.map(oneAnimal =>
                <Animal
                key={oneAnimal.id}
                animal={oneAnimal}
                />)}
            </div>
        </React.Fragment>
    )
}