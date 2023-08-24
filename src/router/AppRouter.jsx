import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import Profile from "../pages/Profile";
import MyBlog from "../pages/MyBlog";
import About from "../pages/About";
import { Details } from "@mui/icons-material";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import { useState } from "react";
import MyBlogDetail from "../components/blog/MyBlogDetail";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const AppRouter = () => {
  
    
    return (
        <Router>
            <NavBar />
            <Routes>
             

               
                <Route path="/" element={<Dashboard  />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-blog" element={<MyBlog />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />

                <Route path="" element={<PrivateRouter />}>
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/new-blog" element={<NewBlog />} />
                    <Route path="/myblogdetail" element={<MyBlogDetail />} />
                </Route>
             
            </Routes>

            <Footer/> 
        </Router>
    );
};

export default AppRouter;
