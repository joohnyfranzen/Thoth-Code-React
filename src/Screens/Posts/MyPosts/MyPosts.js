import Axios from "../../../Utils/Axios";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../../..";
import './MyPosts.css'
import { BiEdit, BiHash, BiMessageSquareX } from "react-icons/bi";



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
            <div className="title-1">
                <div className="title">
                    <h1 className="title-posts">My Code Posts</h1>
                </div>
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
                            <div className="form-3">
                                <div className="post-container">
                                    <div className="post-1">
                                        <h2 className="post-title">{post.title}</h2>
                                    </div>
                                    <div className="post-content">
                                        <p>{post.content}</p>
                                    </div>
                                    <div className="post-slug">                                    
                                        <h2 className="slug"><BiHash/>{post.slug}<BiHash/></h2>
                                    </div>
                                    <div className="buttons">
                                        <Link  to={`/myposts/${post.id}`}>
                                            <button type="button">
                                            <BiEdit/>
                                            </button>
                                        </Link>
                                        <button type="button" onClick={del} >
                                            <BiMessageSquareX/>
                                        </button>
                                    </div>
                                </div> 
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
                <div className="form-input">
                    <h2>Oh, perharps you want to start posting something ?!?
                    </h2>
                    <div className="form-button">                
                        <Link  to={'/newpost'}>Click Here</Link> 
                    </div>
                </div>
            )
            }  

      </div>    
   
   )
}