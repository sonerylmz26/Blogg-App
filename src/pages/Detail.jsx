import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, CardMedia, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import BlogBadgeFav, { BlogBadgeComment, BlogBadgeVisit } from '../components/BlogBadgeFav';
import { useState } from 'react';
import CommentCard from '../components/blog/CommentCard';

const Detail = () => {
  const [open , setOpen ] = useState(false)
  console.log(open)

  const { details} = useSelector((state)=> state.blog)
 console.log(details)


const tarih = new Date(details.publish_date)

  return (
    <div>
<Box sx={{width:"600px", m:"auto",p:2}}>
<CardMedia
      component="img"
      height="500"
      image={details.image}
      alt="green iguana"
      sx={{objectFit:"contain",mt:2, width:"500px",m:"auto"}}
      
    />
            <Box sx={{display:"flex", alignItems : "center", textAlign:"start",  width:"95%", p:0.5 , gap:"15px"}}>

               <AccountCircleIcon  sx={{fontSize:"50px"}} 
               color='success'/>


<Box>
          <Typography  variant="h6" component="h4">
           {details.author}
          </Typography>
        <Typography   variant="h6" component="h4">
           {tarih.toDateString()}
          </Typography>

       </Box>
    

</Box>
<Box>
<Typography gutterBottom variant="h4" component="div"
     
     >
          {details.title}
            </Typography>

            <Typography gutterBottom variant="p" component="div"
       
            >
          {details.content}
            </Typography>
<Box sx={{mt:2}}>
            
<BlogBadgeFav likes_n={details.likes_n}  id={details.id} likes={details.likes} />
<BlogBadgeComment open={open}  setOpen={setOpen} comment_count={details.comment_count} />
<BlogBadgeVisit post_views={details.post_views}/>
</Box>

{
open ? <CommentCard details={details} /> : ""
}

</Box>
    
            </Box>

    </div>
  )
}

export default Detail