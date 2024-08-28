import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://server.testpuzzle.ge",
    headers: {
        Authorization:JSON.parse(localStorage.getItem("token") || '{}')
    }
})
export const defaultUrl = 'http://server.testpuzzle.ge'
export default axiosInstance

// http://server.testpuzzle.ge