const settings = "http://localhost:3003"

export default {
    getAll (){
        return fetch(`${settings}/users`)
        .then((res) => res.json())
    },
    get (id){
        return fetch(`${settings}/users/${id}`)
        .then((res) => res.json())
    }
}