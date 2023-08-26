import axios  from "axios";

const instance = axios.create({
    baseURL: "https://gold-elegant-bison.cyclic.cloud/api",
    timeout: 3000
})

export default instance;
