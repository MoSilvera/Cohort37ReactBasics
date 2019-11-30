import React, { useState, useEffect } from 'react'
import AnimalRepository from '../../repositories/AnimalRepository'

//creating the context under the variable AnimalContext
export const AnimalContext = React.createContext()

export const AnimalProvider = props => {

    const [animals, setAnimals] = useState([])

    useEffect ( () => {
        AnimalRepository.getAll()
        .then((animals) => {
            setAnimals(animals)
        })
    }, [])
    //returns a 'provider' component, this allows other components to 'subscribe' to this component
    //much like custom events, the components who are 'subscribed' to changes in this state will then re-render?--double check this
    return(
        <AnimalContext.Provider value ={{
            animals
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}