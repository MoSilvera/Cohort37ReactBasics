const settings = "http://localhost:3003"

export default {

    getAll() {
        return fetch(`${settings}/animals?_expand=employee&_expand=location`)
        .then((res) => res.json())
    }
}