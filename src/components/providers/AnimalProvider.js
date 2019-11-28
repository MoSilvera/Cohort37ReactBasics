import React, { useState, useEffect } from 'react'
import AnimalRepository from '../../repositories/AnimalRepository'

export const AnimalContext = React.createContext()

export const AnimalProvider = props => {

    const [animals, setAnimals] = useState([])

    useEffect ( () => {
        AnimalRepository.getAll()
        .then((animals) => {
            setAnimals(animals)
        })
    }, [])
    return(
        <AnimalContext.Provider value ={{
            animals
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}