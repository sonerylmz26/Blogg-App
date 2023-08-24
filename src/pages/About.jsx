import { Box, CardMedia, Paper, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useSelector } from 'react-redux';
import {Helmet} from "react-helmet";


const About = () => {
  const {data} = useSelector((state) => state.auth)
  return (
    <Box height={{xs:"79.2vh", md:"70.4vh", lg:"79.1vh" }}
   >
      <Helmet>
        <title>Blog-About</title>
      </Helmet>
      
<Box
      sx={{
        display: 'flex',
        justifyContent:"center",
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 10,
          width: 328,
          height: 428,
        boxShadow:"rgba(128, 181, 138, 0.3) 0px 50px 100px -10px, rgba(12, 7, 7, 0.3) 0px 30px 60px -20px;"
        },
      }}
    >
     
      <Paper sx={{display:"flex" , flexDirection:"column", justifyContent:"center", textAlign:"center" }}>
      <CardMedia
          component="img"
          height="100"
          image={data.image}
          alt="green iguana"
          sx={{objectFit:"contain", mb:2}}
        />

      <Typography  gutterBottom variant="h3" component="div">
           Yılmaz
          </Typography>
          <Typography variant="h4">
          Full Stack
          </Typography>
          <Box sx={{mt:"20px"}}>
            <Link  to="https://github.com/sonerylmz26" target="_blank">
            <GitHubIcon sx={{color:"#0A0707", "&:hover":{
              
              transition: "color .8s ease", backgroundColor:"#F2E5E5", borderRadius:"50%", padding:"2px",color:"red"
            } , fontSize:50}} />
            </Link>
            <Link to="https://www.linkedin.com/in/sonery%C4%B1lmazsy/" target="_blank">
            <LinkedInIcon sx={{color:"#0A0707", "&:hover":{
              color:"red", transition: "color .8s ease", backgroundColor:"#F2E5E5", borderRadius:"50%", padding:"2px"
            } , fontSize:50}}/>
            </Link>
            <Link to="https://github.com/sonerylmz26" target="_blank">
            <InstagramIcon  sx={{color:"#0A0707","&:hover":{
              color:"red",  transition: "color .8s ease", backgroundColor:"#F2E5E5", borderRadius:"50%", padding:"2px"
            }  , fontSize:50}}/>
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
            <YouTubeIcon color="inherit"  sx={{color:"#0A0707" , "&:hover":{
              color:"red", transition: "color .8s ease", backgroundColor:"#F2E5E5", borderRadius:"50%", padding:"2px"
            } ,fontSize:50}}/>
            </Link>
          </Box>


      </Paper>
      
    
    </Box>
    </Box>
  )
}

export default About