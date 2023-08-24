
import { Box, Container, Grid, Typography } from "@mui/material";

 const Footer  = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#221C36",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        
        position: "sticky",
        bottom:0,
        
      }}
    >
      <Container maxWidth="lg" >
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}  >
            <Typography align="center" color="black" variant="h5" sx={{color:"white"}} >
              Yılmaz 
            </Typography>
            <Typography color="black" variant="h5" sx={{color:"white"}} >
              React Blog App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" color="textSecondary" variant="subtitle1" sx={{color:"white"}}>
              {`${new Date().getFullYear()} | React | Material UI | React Router | React Redux Toolkit`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;