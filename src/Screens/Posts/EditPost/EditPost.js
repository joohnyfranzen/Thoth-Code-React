import { React, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { store } from "../../..";
import Axios from "../../../Utils/Axios";


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
        <div className="form-1">
            <div className="form-2">
                <div className="form-input">
                    <h1>Edit Post</h1>
                </div>
                <div className="form-input">
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
                        <div className="form-button">
                            <button type="button" onClick={submitForm}>Submit</button>
                        </div>                    
                    </form>
                </div>
            </div> 
        </div>
        
    )
}