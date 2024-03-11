import  axios  from "axios"

const api = axios.create({
    baseURL:'https://delhi-vape.com/'
    // baseURL:'/'
    // baseURL:'http://localhost:3000/'
})

export default api