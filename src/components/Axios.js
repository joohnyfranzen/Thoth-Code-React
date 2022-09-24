import axios from "axios";

export default function Axios(){
    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json"
        }
    });
    return {
        http
    }
}