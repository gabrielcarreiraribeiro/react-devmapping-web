import axios from 'axios'


// Configurando o axios para realizar requisições a partir de uma url base
const api = axios.create({
    baseURL: "https://devmappingapi.herokuapp.com"
})

export default api