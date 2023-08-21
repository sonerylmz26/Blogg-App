
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCall from '../hooks/useBlogCall'
import { BottomNavigationAction, Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BlogBadgeFav, { BlogBadgeComment, BlogBadgeVisit } from '../components/BlogBadgeFav';
import { bagdeBox, btnReadMore } from '../style/globalStyle';




const Dashboard = () => {
  const { getBlogData, postBlogLikeData} = useBlogCall()
  const {blogs} = useSelector((state)=> state.blog)
  console.log(blogs)



  useEffect(() => {
   

    getBlogData("blogs")
  }, [])
  

  return (
    <div>
<Grid sx={{display:"flex", justifyContent:"center"}} container spacing={2} mt="10px" p="10px">

 

{
  blogs.map((blog, index)=> {

    const{id,image, title, publish_date, content, author, likes} = blog
    const tarih = publish_date
    
    console.log("tarih" , tarih)
return (
  <Grid key={index} item xs={10} md={6} lg={4} xl={3}>
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
           {publish_date}
            </Typography>

            <Box sx={{display:"flex", alignItems : "center", textAlign:"start",  width:"95%", p:0.5 , gap:"5px"}}>
               <AccountCircleIcon />
               <Typography  variant="h6" component="h4">
           {author}
            </Typography>
            </Box>
           
  
<Box sx={bagdeBox}>

<Box >
<BlogBadgeFav id={id} likes={likes} />
<BlogBadgeComment />
<BlogBadgeVisit  />
</Box>

<Button sx={btnReadMore}>
  Read More
</Button>

</Box>
</Card>
</Grid>
)


  }
    
   
   
)}

 

</Grid>



    </div>
  )
}

export default Dashboard