import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




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
// const like = likes_n.some((item, i) => item.user_id == )
const { currentUser } = useSelector((state) => state.auth)
const navigate = useNavigate()


  return (

    <IconButton  onClick={()=> {
      currentUser ?   postBlogLikeData("likes", id) : navigate("/login")
    }
    
   } aria-label="cart">
      <StyledBadge badgeContent={likes} color="secondary">
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  );
}



export  function BlogBadgeComment({comment_count, open, setOpen}) {
 
  return (
    <IconButton onClick={()=>setOpen(!open)} sx={{ml:"10px"}} aria-label="cart">
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

