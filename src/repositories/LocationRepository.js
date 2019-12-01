const settings = "http://localhost:3003"

export default {

    getAll() {
        return fetch(`${settings}/locations?_embed=animals&_embed=employees`)
        .then((res) => res.json())
    },
    get(id){
        return fetch(`${settings}/locations/${id}`)
        .then((res) => res.json())
    }
}