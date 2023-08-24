import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { Helmet } from "react-helmet";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import MyBlogCard from "../components/blog/MyBlogCard";
const MyBlog = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);
  const { data } = useSelector((state) => state.auth);
  console.log(blogs);
  useEffect(() => {
    getBlogData("blogs");
  }, []);
  return (
    <Box minHeight={{xs:"79.2vh", md:"70.4vh", lg:"79.1vh" }} >
      <Helmet>
        <title>My Blogs</title>
      </Helmet>
      <Grid
        sx={{ display: "flex", justifyContent: "center" }}
        container
        spacing={2}
        mt="10px"
        p="10px"
      >
        {blogs
          .filter((blog) => blog.author === data.username)
          .map((item, index) => {
            return (
              <Grid key={index} item xs={10} md={6} lg={4} xl={3}>
                <MyBlogCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default MyBlog;