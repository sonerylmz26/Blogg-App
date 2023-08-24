import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BlogBadgeFav, { BlogBadgeComment, BlogBadgeVisit } from '../BlogBadgeFav';
import React from "react";
import { bagdeBox, btnReadMore } from '../../style/globalStyle';
import { useNavigate } from "react-router-dom";
import useBlogCall from "../../hooks/useBlogCall";
const MyBlogCard = ({ item }) => {
  const {
    id,
    image,
    title,
    publish_date,
    content,
    author,
    likes,
    comment_count,
    post_views,
    likes_n,
  } = item;
  const navigate = useNavigate()
const {getBlogDetailsData} = useBlogCall()


  const tarih = new Date(publish_date);
  return (
    <div>
      <Card
        sx={{
          //width: "400px",
          //height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="green iguana"
          sx={{ objectFit: "contain", mt: 2, width: "150px" }}
        />
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "250px", md: "400px" },
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
        <Typography variant="p" component="div">
          {tarih.toDateString()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "95%",
            p: 0.5,
            gap: "5px",
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 5,
              fontWeight: "600",
            }}
          >
            <AccountCircleIcon />
            {author}
          </Typography>
        </Box>
        <Box sx={bagdeBox}>
          <Box>
            <BlogBadgeFav likes_n={likes_n} id={id} likes={likes} />
            <BlogBadgeComment comment_count={comment_count} />
            <BlogBadgeVisit post_views={post_views} />
          </Box>
          <Box>
            {/* <Button sx={btnReadMore}>Read More</Button> */}
            <Button
              onClick={() => {
                // setId(id);
                getBlogDetailsData("blogs", id);
                navigate("/myblogdetail");
              }}
              sx={btnReadMore}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};
export default MyBlogCard;