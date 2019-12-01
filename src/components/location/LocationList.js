import React, {useEffect, useContext} from 'react'
import Location from "./Location"
import { LocationContext } from '../providers/LocationProvider'

//
export default props => {
    //subscribes to changes in the animals value of the AnimalContext object
    let { locations } = useContext(LocationContext)

    //returns a location component for each location in value from the context object
    return(
        <React.Fragment>
           <div className="animalList">
                {locations.map(oneLocation =>
                <Location
                key={oneLocation.id}
                location={oneLocation}
                />)}
            </div>
        </React.Fragment>
    )
}