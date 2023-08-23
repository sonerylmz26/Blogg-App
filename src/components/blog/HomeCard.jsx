import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import {  Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BlogBadgeFav, { BlogBadgeComment, BlogBadgeVisit } from '../BlogBadgeFav';
import { bagdeBox, btnReadMore } from '../../style/globalStyle';
import useBlogCall from "../../hooks/useBlogCall";


const HomeCard= ({blog}) => {
  const  {id,image, title, publish_date, content, author, likes, comment_count, post_views, likes_n 
  } = blog

const tarih = new Date(publish_date)

const navigate = useNavigate()
const {getBlogDetailsData} = useBlogCall()



  return (
    <div>

  <Card  sx={{height:"400px", display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  <CardMedia
      component="img"
      height="150"
      image={image}
      alt="green iguana"
      sx={{objectFit:"contain",mt:2, width:"200px"}}
    />
     <Typography gutterBottom variant="h4" component="div"
     
     >
          {title}
            </Typography>

            <Typography gutterBottom variant="p" component="div"
            sx={{
          width:{xs:"250px", md:"350px", lg:"450px"}, 
          overflow:"hidden", 
          whiteSpace:"nowrap",
          textOverflow:"ellipsis"
          }}
            >
          {content}
            </Typography>
            <Typography  variant="p" component="div">
           {tarih.toDateString()}
            </Typography>

            <Box sx={{display:"flex", alignItems : "center", textAlign:"start",  width:"95%", p:0.5 , gap:"5px"}}>
               <AccountCircleIcon />
               <Typography  variant="h6" component="h4">
           {author}
            </Typography>
            </Box>
           
  
<Box sx={bagdeBox}>

<Box >
<BlogBadgeFav likes_n={likes_n}  id={id} likes={likes} />
<BlogBadgeComment comment_count={comment_count} />
<BlogBadgeVisit post_views={post_views}
/>
</Box>

<Button onClick={()=>{

getBlogDetailsData("blogs", id)
navigate(`/detail/${id}`)

} 

} sx={btnReadMore}>
Read More
</Button>

</Box>
</Card>


    </div>
  )
}

export default HomeCard