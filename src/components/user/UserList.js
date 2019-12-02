import React, { useContext } from 'react'
import User from './User'
import { UserContext } from '../providers/UserProvider'
import { UserAnimalContext } from '../providers/UserAnimalProvider'

export default props => {
    //subscribes to changes in the animals value of the AnimalContext object
    let { users } = useContext(UserContext)
    let { userAnimals } = useContext(UserAnimalContext)

    //returns an animal component for each animal in value from the context object
    return(
        <React.Fragment>
           <div className="animalList">
                {users.map(oneUser =>
                <User
                key={oneUser.id}
                user={oneUser}
                />)}
            </div>
        </React.Fragment>
    )
}