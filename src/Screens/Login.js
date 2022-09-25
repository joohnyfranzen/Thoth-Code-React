import { useRef } from "react";
import { useReducer, useState } from "react";
import { store } from "..";
import Axios from "../components/Axios";


export default function Login() {


    const {http} = Axios();
    const {value} = store.getState().Auth;

    const email = useRef(null)
    const password = useRef(null)

    const submitForm = () => {
        
        http.post('/login', {email:email.current.value, password:password.current.value}).then((res)=>{
            http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
            store.dispatch({type: 'SET_TOKEN', value: res.data.token})
        })
    }
    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <h1>Login</h1>
                <div className="card p-4">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                                ref={email}
                            id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" 
                                ref={password}
                            id="pwd"/>
                        </div>
                        <div className="form-group form-check">
                        </div>
                        <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
    )
}