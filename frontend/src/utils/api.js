import  axios  from "axios"
const api = axios.create({
    baseURL:'https://delhi-vape.com/'
    // baseURL:'/'
})

export default api