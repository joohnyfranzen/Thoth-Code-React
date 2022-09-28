import { React, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { store } from "../../..";
import Axios from "../../../components/Axios";


export default function EditPost() {

    const { id } = useParams();

    const {http} = Axios();
    const title = useRef();
    const slug = useRef();
    const content = useRef();
    const {value} = store.getState().Auth;
    const [postData, setPostData] = useState({});

    const navigate = useNavigate()
    function post() {
        http.get(`/post/${id}`, {headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${value}`}}).then((response) => {
                setPostData(response.data);
            });
            
        }
        
        useEffect(() => {
            post();
        }, []);
        
        const submitForm = () => {
            http.put(`/post/${id}`, {title:title.current.value, slug:slug.current.value, content:content.current.value}).then(() => {
                navigate('/myposts')
            })
            
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <p>asdoaskdo</p>
                <p>asdokasopd

                </p>
                <h1>New Post</h1>
                <div className="card p-4">
                    <form action="/action_page.php">
                        <div>
                            <div className="form-group">
                                <label>Title:</label>
                                <input className="form-control" 
                                    defaultValue={postData.title} 
                                    ref={title}
                                />
                            </div>
                            <div className="form-group">
                                <label>Slug:</label>
                                <input className="form-control" 
                                    defaultValue={postData.slug}  
                                    ref={slug}
                                />
                            </div>
                            <div className="form-group">
                                <label>Content:</label>
                                <input className="form-control" 
                                    defaultValue={postData.content}  
                                    ref={content}
                                />
                            </div>
                        </div>
                    
                        <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
        
    )
}