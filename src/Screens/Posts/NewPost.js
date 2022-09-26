import { useRef } from "react";
import { store } from "../..";
import Axios from "../../components/Axios";

export default function NewPost() {

    const {http} = Axios();
    const title = useRef();
    const slug = useRef();
    const content = useRef();
    const {value} = store.getState().Auth;


    console.log(value);
    const submitForm = () => {
        http.post('/post', {title:title.current.value, slug:slug.current.value, content:content.current.value})
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <h1>New Post</h1>
                <div className="card p-4">
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
                        <div className="form-group">
                            <label>Content:</label>
                            <input className="form-control" placeholder="Content" 
                                ref={content}
                            />
                        </div>
                        <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
        
    )
}