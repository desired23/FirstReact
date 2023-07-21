import axios from "axios";
const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/desired23/FirstReact",
})
export default instance;