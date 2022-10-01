import { useEffect, useRef, useState } from "react";
import { BiHash, BiLike, BiRightArrowAlt } from "react-icons/bi";
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
        <div className="main">
            <div className="margin">
            <div className="title">
                <h1>Post</h1>
            </div>
            <div className="posts">
                    <div className="post-container">
                        <div className="post-title">
                            <h2>{post.title}</h2>
                        </div>
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                        <div className="post-slug">
                            <h2 className="slug"><BiHash/>{post.slug}<BiHash/></h2>
                        </div>
                        <div className="buttons">
                            <Link className="nav-button" to={`/post/${post.id}`}><button><BiLike/></button></Link>
                            <button className="nav-button" onClick={() => {setComment(!comment)}}><BiRightArrowAlt/></button>
                        </div>
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
        </div>      
    )
}