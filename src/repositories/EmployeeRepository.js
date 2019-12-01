const settings = "http://localhost:3003"

export default {

    getAll() {
        return fetch(`${settings}/employees?_expand=location&_embed=animals`)
        .then((res) => res.json())
    },
    get(id) {
        return fetch (`${settings}/employees/${id}`)
        .then((res) => res.json())
    }
}