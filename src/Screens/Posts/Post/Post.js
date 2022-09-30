import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../../../Utils/Axios";
import './Post.css'


export default function Post() {
    
    const { id } = useParams();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(false);

    const commentary = useRef();

    const {http} = Axios();
    
    function getPost() {
        http.get(`/post/${id}`).then((response) => {
            setPost(response.data);
        });
    }   
    function getComments() {
        http.get(`/postcomment/${id}`).then((response) => {
            setComments(response.data);
        });
    }
    
    useEffect(() => {
        getPost();
        getComments();
    }, []);
    const commentPost = () => {
        http.post(`/postcomment/${id}`, {comment:commentary.current.value, post_id:id})
    }

    return(

        <div>
            <div className="posts" id="post-id">
                <div className="post-container">
                    <h2 className="post-title">{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.user_id}</p>
                    <h3 className="slug">{post.slug}</h3>
                    <Link className="nav-button" to={`/post/${post.id}`}>Like</Link>
                    <button className="nav-button" onClick={() => {setComment(!comment)}}>Comment</button>
                </div> 
            </div>
            <div className="post-comment">
                {comment ? ( 
                    
                    <div className="newComment">
                            <input ref={commentary} type="text">
                            </input>
                            <button type="submit" onClick={() => commentPost()}>Comentar</button>
                        </div>
                    ) : (<> </>)
                }
                
                {comments.map((comment) => {
                    return (
                        <div className="comment">
                            <h2>
                                {comment.user_comment.name}
                            </h2>
                            <p>
                                Comment= {comment.comment}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
        
    )
}