import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:3000",
    headers: {
        Authorization:JSON.parse(localStorage.getItem("token") || '{}')
    }
})
export const defaultUrl = 'http://127.0.0.1:3000'
export default axiosInstance

// http://server.testpuzzle.ge

// hello wordl