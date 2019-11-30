import React, {useEffect, useContext} from 'react'
import Animal from "./Animal"
import { AnimalContext } from '../providers/AnimalProvider'

//
export default props => {
    let { animals } = useContext(AnimalContext)
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