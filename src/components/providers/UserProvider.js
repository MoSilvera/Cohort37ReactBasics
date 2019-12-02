import React, {useState, useEffect} from 'react'
import UserRepository from '../../repositories/UserRepository'

export const UserContext = React.createContext()


export const UserProvider = props => {
    const [users, setUsers] = useState([])

    useEffect( () => {
        UserRepository.getAll().then(res => setUsers(res))
    }, [])
    return(
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}