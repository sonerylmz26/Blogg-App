import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { Helmet } from "react-helmet";
import HomeCard from "../components/blog/HomeCard";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Dashboard = () => {
const { getBlogData } = useBlogCall();
const {blogs} = useSelector((state)=> state.blog)

    useEffect(() => {
        getBlogData("blogs");
    }, []);

    return (
        <Box minHeight={{xs:"79.2vh", md:"70.4vh", lg:"79.1vh" }} >
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


        </Box>
    );
};

export default Dashboard;
