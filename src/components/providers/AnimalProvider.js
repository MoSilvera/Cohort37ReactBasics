import React, { useState, useEffect } from 'react'
import AnimalRepository from '../../repositories/AnimalRepository'

//creating context object called AnimalContext
export const AnimalContext = React.createContext()

export const AnimalProvider = props => {

    //declares state variable of animals, setAnimals will be invoked to set state here
    //state is initially set to an empty array
    const [animals, setAnimals] = useState([])

    //useEffect here will only be invoked on the FIRST render, because the second argument is an empty array
    //this means it will not be looking for changes in any state to trigger re-render?
    useEffect ( () => {
        AnimalRepository.getAll()
        .then((animals) => {
            setAnimals(animals)
        })
    }, [])

    //returns a 'provider' component, this allows other components to 'subscribe' to this component
    //much like custom events, the components who are 'subscribed' to changes in the value props will then re-render
    //the value props will be sent to the children of the provider
    return(
        <AnimalContext.Provider value ={{
            animals
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}