import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../../../components/Axios";


export default function Post() {
    const { id } = useParams();

    const [post, setPost] = useState({});

    const {http} = Axios();
    http.get(`/post/${id}`).then((response) => {
        setPost(response.data);
    });
    return(

        <div>
            <div className="posts" id="post-id">
                <div className="post-container">
                    <h2 className="post-title">{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.user_id}</p>
                    <h3 className="slug">{post.slug}</h3>
                    <Link className="nav-button" to={`/post/${post.id}`}>Like</Link>
                    <Link className="nav-button" to={`/post/${post.id}`}>Visit</Link>
                    <Link className="nav-button" to={`/post/${post.id}`}>Comment</Link>
                </div> 
            </div>
        </div>
        
    )
}