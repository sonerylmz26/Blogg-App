import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import Profile from "../pages/Profile";
import MyBlog from "../pages/MyBlog";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
   



      </Routes>
    </Router>
  );
};

export default AppRouter;
