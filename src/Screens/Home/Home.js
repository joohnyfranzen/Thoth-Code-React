import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../Utils/Axios";
import "./Home.css";

export default function Home() {

    const {http} = Axios();
    
    const [posts, setPosts] = useState([]);

    let pagePaginate = 1

    function paginate(page = 1) {
        http.get(`/post?page=${page}`).then((response) => {
            setPosts(response.data['data']);
        });
        pagePaginate = page

    }

    useEffect(() => {
        paginate();
    }, []);

    return(
        <div className="main">
            <img className="thoth" src="./thot.jpg" alt="" />
        <div className="title">
            <h1 className="title-posts">Thoth Code</h1>
        </div>
        <div className="posts">
            {posts.map((post) => {
            return (
                <div className="post-container">
                    <h2 className="post-title">{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.user_id}</p>
                    <h3 className="slug">{post.slug}</h3>
                    <Link className="nav-button" to={`/post/${post.id}`}>Like</Link>
                    <Link className="nav-button" to={`/post/${post.id}`}>Visit</Link>
                    <Link className="nav-button" to={`/post/${post.id}`}>Comment</Link>

                </div> 
            );
            })}
        </div>
        <div className="pages">
            <button className="page-btn" onClick={() => {paginate(pagePaginate-1)}  }> {'<<'} </button>
            <p>Current page {posts.current_page}</p>
            <button className="page-btn" onClick={() => {paginate(pagePaginate+1)}  }> {'>>'} </button>
        </div>
      </div>
    )
}