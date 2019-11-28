import { useState } from 'react'

//this is a custom hook that will return an object
//hook allows us to use local state w/o a class, we can share logic
const useAuthCheck = () => {

    //declares a state variable of is logged in, setLogin will be out call to set state
    //initially sets the state of isLoggedIn to false
    const [isLoggedIn, setLogin] = useState(false)

    //returns true if current state of isLoggedIn is true
    //OR sessionStorage is not empty
    //OR local storage is not empty
    const isAuthenticated = () =>
        isLoggedIn
        || sessionStorage.getItem !== null
        || localStorage.getItem !== null

    //accepts email password and storageType
    //sets default storageType to localStorage
    const login = (email, password, storageType = localStorage) => {

        //puts a stringified object in localStorage with the user input email and password
        storageType.setItem(
            "credentials",
            JSON.stringify({
                email: email,
                password: password
             })
        )
        setLogin(true)
    }


    const logout = () => {
        //sets the state of isLoggedIn to false
        setLogin(false)

        //removes the credentials item from both session and local storage
        //you can use .clear but if you are running other projects on local host it will clear those too
        sessionStorage.removeItem("credentials")
        localStorage.removeItem("credentials")

    }
    //returns an object with the all three functions
    return { isAuthenticated, login, logout}
}

export default useAuthCheck