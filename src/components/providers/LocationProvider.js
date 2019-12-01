import React, { useState, useEffect } from 'react'
import LocationRepository from '../../repositories/LocationRepository'

//creating context object called AnimalContext
export const LocationContext = React.createContext()

export const LocationProvider = props => {


    const [locations, setLocations] = useState([])

    //useEffect here will only be invoked on the FIRST render, because the second argument is an empty array
    //this means it will not be looking for changes in any state to trigger re-render?
    useEffect ( () => {
        LocationRepository.getAll()
        .then((locations) => {
            setLocations(locations)
        })
    }, [])

    //returns a 'provider' component, this allows other components to 'subscribe' to this component
    //much like custom events, the components who are 'subscribed' to changes in the value props will then re-render
    //the value props will be sent to the children of the provider
    return(
        <LocationContext.Provider value ={{
            locations
        }}>
            {props.children}
        </LocationContext.Provider>
    )

}