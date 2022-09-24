import { useState } from "react";
import Axios from "../components/Axios";

export default function Login() {

    const {http} = Axios();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(email, password)
    const submitForm = () => {

        http.post('/login', {email:email, password:password}).then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <h1>Login</h1>
                <div className="card p-4">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                                onClick={e=>setEmail(e.target.value)}
                            id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" 
                                onClick={e=>setPassword(e.target.value)}
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