import axios from 'axios'

const client = axios.create({
  baseURL: "https://api.exchangerate.host/",
})

export default client