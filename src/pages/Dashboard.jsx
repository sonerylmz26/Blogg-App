import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { Helmet } from "react-helmet";
import HomeCard from "../components/blog/HomeCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Dashboard = () => {
const { getBlogData } = useBlogCall();
const {blogs, details} = useSelector((state)=> state.blog)
console.log(blogs)
    useEffect(() => {
        getBlogData("blogs");
    }, []);

    return (
        <div>
            <Helmet>
                <title>Blogs-Home</title>
            </Helmet>

            <Grid sx={{display:"flex", justifyContent:"center"}} container spacing={2} mt="10px" p="10px">

 {

  blogs.map((blog, index)=> {

return(

 <Grid key={index} item xs={10} md={6} lg={4} xl={3}>
 <HomeCard blog={blog} /> 
 </Grid>
)
  }
  ) 
}

 </Grid>

        </div>
    );
};

export default Dashboard;
