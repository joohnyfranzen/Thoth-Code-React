import Axios from "../../../Utils/Axios";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../../..";
import './MyPosts.css'


export default function MyPosts() {

    const {http} = Axios();

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    let pagePaginate = 0;

    const {value} = store.getState().Auth;

    function paginate(page = 1) {
        http.get(`/myposts?page${page}`, {headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${value}`}}).then((response) => {
            setPosts(response.data['data']);
        });
        pagePaginate = page;
    }

    useEffect(() => {
        paginate();
    }, []);

    return (
        <div className="main">

            <div className="title">
                <h1 className="title-posts">My Code Posts</h1>
            </div>
            { posts[0] ?
            (
                <div>
                    <div className="posts">
                        {posts.map((post) => {
                        const del = () => {
                            http.delete(`/post/${post.id}`).then(() => {
                                window.location.reload(false)
                            })          
                        }
                        return (
                            <div className="post-container">
                                <h2 className="post-title">{post.title}</h2>
                                <p>{post.content}</p>
                                <p>{post.user_id}</p>
                                <h3 className="slug">{post.slug}</h3>
                                <Link className="nav-button" to={`/myposts/${post.id}`}>Edit</Link>
                                <button type="button" onClick={del} className="btn-danger del-button">Delete</button>
                            </div> 
                        );
                    })}
                    </div>
                    <div className="pages">
                        <button className="page-btn" onClick={() => {paginate(pagePaginate-1)}  }> {'<<'} </button>
                        <button className="page-btn" onClick={() => {paginate(pagePaginate+1)}  }> {'>>'} </button>
                    </div>
                </div>
            ) : 
            (
                <div>
                    <h2>Oh, perharps you want to start posting something ?!?
                    </h2>
                    <Link className="nav-button" to={'/newpost'}>Click Here</Link> 
                </div>
            )
            }  

      </div>    
   
   )
}