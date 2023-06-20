import axios from "axios";
const api = axios.create(
    //{baseURL:'https://homecareback.onrender.com'}
    {baseURL:'http://localhost:8080'}
)
export default api