const settings = "http://localhost:3003"

export default {
    getByUser (id){
        return fetch(`${settings}/userAnimals?_expand=animal&_expand=user&userId=${id}`)
        .then((res) => res.json())
    },
    getAll (){
        return fetch (`${settings}/userAnimals?_expand=animal&_expand=user`)
        .then((res) => res.json())
    }
}