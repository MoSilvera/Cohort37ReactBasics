const settings = "http://localhost:3003"

export default {
    getByAnimal (id){
        return fetch(`${settings}/userAnimals?_expand=user&userId=${id}`)

    }
}