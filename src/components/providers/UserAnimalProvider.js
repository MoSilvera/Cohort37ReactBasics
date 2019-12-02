import React, {useState, useEffect} from 'react'
import UserAnimalRepository from '../../repositories/UserAnimalRepository'

export const UserAnimalContext = React.createContext()

//
export const UserAnimalProvider = props => {
    const [userAnimals, setUserAnimals] = useState([])

    useEffect( () => {
        UserAnimalRepository.getAll().then(res => setUserAnimals(res))
    }, [])
    return(
        <UserAnimalContext.Provider value={{userAnimals}}>
            {props.children}
        </UserAnimalContext.Provider>
    )
}