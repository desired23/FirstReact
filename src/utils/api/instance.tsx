import axios from "axios";
const instance = axios.create({
    baseURL: "https://portfolio-zsir.onrender.com/api/",
})
export default instance;