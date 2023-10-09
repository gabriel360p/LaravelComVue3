import axios from "axios";

//iniciando o serviço do axios

export const http = new axios.create({
    baseURL:"http://localhost:8000/api/",
})