import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../../..";
import Axios from "../../../Utils/Axios";
import './NewPost.css'

export default function NewPost() {

    const navigate = useNavigate()
    const {http} = Axios();
    const title = useRef();
    const slug = useRef();
    const content = useRef();
    const {value} = store.getState().Auth;



    const submitForm = () => {
        http.post('/post', {title:title.current.value, slug:slug.current.value, content:content.current.value}).then(() => {
            navigate('/myposts');
        })
    }

    return(
        <div className="form-1">
            <div className="form-2">
                <div className="form-input">
                    <h1>New Post</h1>
                </div>
                <div className="form-input">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label>Title:</label>
                            <input className="form-control" placeholder="Enter a Title" 
                                ref={title}
                            />
                        </div>
                        <div className="form-group">
                            <label>Slug:</label>
                            <input className="form-control" placeholder="Slug" 
                                ref={slug}
                            />
                        </div>
                        <div className="form-group" >
                            <label>Content:</label>
                            <textarea className="form-control" size="300" placeholder="Content" 
                                ref={content}
                            />
                        </div>
                        <div className="form-button">
                            <button type="button" onClick={submitForm} >Submit</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
        
    )
}