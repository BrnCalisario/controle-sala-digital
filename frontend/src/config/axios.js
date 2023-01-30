import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:4000',
    proxy: {
        protocol: 'http',
        host: 'localhost',
        port: 4000
    }
})
