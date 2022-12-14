import {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { store } from "../..";
import Axios from "../../Utils/Axios"

export default function Register() {

    const navigate = useNavigate();
    const {http} = Axios();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    
    
    const submitForm = () => {

        http.post('/user', {name:name, email:email, password:password}).then((res)=>{
            store.dispatch({type: 'SET_TOKEN', value:res.data.token})
            localStorage.setItem('token', res.data.token)
            navigate('/')
        })
    }

    return(
        <div className="form-1">
            <div className="form-2">
                <h1>Register</h1>
                <div className="form-input">
                    <form action="/action_page.php">
                    <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="name" className="form-control" placeholder="Enter name" 
                                onChange={e=>setName(e.target.value)}
                            id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                                onChange={e=>setEmail(e.target.value)}
                            id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" 
                                onChange={e=>setPassword(e.target.value)}
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