import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "../Components/Logout/Logout";
import Navbar from "../Components/Navbar/LoggedNavbar";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Home from "../Screens/Home/Home";
import EditPost from "../Screens/Posts/EditPost/EditPost";
import MyPosts from "../Screens/Posts/MyPosts/MyPosts";
import NewPost from "../Screens/Posts/NewPost/NewPost";
import Post from "../Screens/Posts/Post/Post";



export default function Logged() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/newpost" element={<NewPost/>}/>
                <Route path="/myposts" element={<MyPosts/>}/>
                <Route path="/myposts/:id" element={<EditPost/>}/>
                <Route path="/post/:id" element={<Post/>}></Route>
            </Routes>
        </Router>
    )
}