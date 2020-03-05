import axios from 'axios'

export default {
    getBookLists() {
        return axios.get('http://localhost:3000/books')
            .then(response => {
                return response
            })
    },

    getBook(id) {
        return axios.get('http://localhost:3000/books/' + id)
            .then(response => {
                return response
            })
    }
}