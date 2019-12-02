import React, {useContext} from 'react'
import { UserContext } from '../providers/UserProvider'
import { UserAnimalContext } from '../providers/UserAnimalProvider'

export default props => {
    let {users} = useContext(UserContext)
    let {userAnimals} = useContext(UserAnimalContext)

   const currentUser = props.user
   const userAnimalsForUser = userAnimals.filter( userAnimal => userAnimal.userId === props.user.id)

    return(
        <React.Fragment>
        <div className="card" style={{width: 10 + 'rem'}}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_184513.png" className="card-img-top" alt="dog"></img>
            <div className="card-body">
                <div className="cared-title">{currentUser.firstName}</div>
                <div>Pets: {userAnimalsForUser.map(oneUserAnimal => `${oneUserAnimal.animal.name}`).join(", ")}</div>
            </div>
        </div>
    </React.Fragment>
    )
}