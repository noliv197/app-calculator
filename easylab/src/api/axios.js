import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8000/api/users'
})

export const conversor = axios.create({
    baseURL: 'http://localhost:8000/api',

})