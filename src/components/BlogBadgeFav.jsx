import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useBlogCall from "../hooks/useBlogCall";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: -1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function BlogBadgeFav({likes,id,likes_n }) {
const {  postBlogLikeData} = useBlogCall()
const like = likes_n.map((item, i) => item.post_id )



  return (

    <IconButton  onClick={()=>postBlogLikeData("likes", id) } aria-label="cart">
      <StyledBadge badgeContent={likes} color="secondary">
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  );
}



export  function BlogBadgeComment({comment_count}) {
  return (
    <IconButton sx={{ml:"10px"}} aria-label="cart">
      <StyledBadge badgeContent={comment_count} color="secondary">
        <CommentIcon />
      </StyledBadge>
    </IconButton>
  );
}

export  function BlogBadgeVisit({post_views
}) {
  return (
    <IconButton sx={{ml:"10px"}} aria-label="cart">
      <StyledBadge badgeContent={post_views
} color="secondary">
        <VisibilityIcon />
      </StyledBadge>
    </IconButton>
  );
}

