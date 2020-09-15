import axios from 'axios'

const api = axios.create({
    baseURL: 'https://wineboard-api.herokuapp.com/'
})

export default api
