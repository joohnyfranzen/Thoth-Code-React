import { useReducer, useState } from "react";
import { store } from "..";
import Axios from "../components/Axios"

export default function Register() {

    const {http} = Axios();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const [aaaa, dispatch] = useReducer(store);
    const submitForm = () => {

        http.post('/user', {name:name, email:email, password:password}).then((res)=>{
            dispatch({type: 'SET_TOKEN', value:res.data.token})
            console.log(aaaa);
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <h1>Register</h1>
                <div className="card p-4">
                    <form action="/action_page.php">
                    <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="name" className="form-control" placeholder="Enter name" 
                                onChange={e=>setName(e.target.value)}
                            id="name"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address:</label>
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
                        <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
        
    )
}