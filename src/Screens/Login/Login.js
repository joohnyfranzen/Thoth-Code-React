import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../..";
import Axios from "../../Utils/Axios";
import './Login.css'

export default function Login() {
    
    
    const navigate = useNavigate()
    const {http} = Axios();

    const email = useRef(null)
    const password = useRef(null)

    const submitForm = () => {
        
        http.post('/login', {email:email.current.value, password:password.current.value}).then((res)=>{
            store.dispatch({type: 'SET_TOKEN', value: res.data.token})
            localStorage.setItem('token', res.data.token)
            navigate('/')
        })
        
    }
    return(
        <div className="form-1">
            <div className="form-2">
                <h1>Login</h1>
                <div className="form-input">
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
                        <div className="form-button">
                            <button type="button" onClick={submitForm}>Submit</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}