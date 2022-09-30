import axios from "axios";
import { store } from "..";

export default function Axios(){
    const {value} = store.getState().Auth;

    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${value}`
        }
    });
    return {
        http
    }
}