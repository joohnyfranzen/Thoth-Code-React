import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../Utils/Axios";
import "./Home.css";
import { BiChevronsLeft, BiChevronsRight, BiHash, BiLike, BiRightArrowAlt } from "react-icons/bi";

export default function Home() {

    
    const [posts, setPosts] = useState([]);
    
    const {http} = Axios();
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
            <div className="thoth-img">
                <img className="thoth" src="./thot.jpg" alt="" />
            </div>
            <div className="title">
                <h1>Home</h1>
            </div>
            <div className="posts">
                {posts.map((post) => {
                return (
                    <div className="post-container">
                        <div className="post-title">
                            <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
                        </div>              
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                        <div className="post-slug">
                            <h2><BiHash/>{post.slug}<BiHash/></h2>
                        </div>                        
                        <div className="buttons">
                            <button><BiLike/></button>
                            <Link to={`/post/${post.id}`}><button><BiRightArrowAlt/></button></Link>                            
                        </div>
                    </div> 
                );
                })}
            </div>
            <div className="pages">
                <button className="page-btn" onClick={() => {paginate(pagePaginate-1)}  }> <BiChevronsLeft/> </button>
                <button className="page-btn" onClick={() => {paginate(pagePaginate+1)}  }> <BiChevronsRight/> </button>
            </div>
      </div>
    )
}