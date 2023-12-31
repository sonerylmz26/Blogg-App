import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LoginForm, { loginSchema } from "../components/auth/LoginForm";
import { Formik } from "formik";
import useAuthCalls from "../hooks/useAuthCalls";
import {Helmet} from "react-helmet";
import { useSelector } from "react-redux";
const Login = () => {
const { login } = useAuthCalls();

  return (
    <Container maxWidth="lg" >
      <Helmet>
        <title>Blog-Login</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
          
        }}
      >
        <Grid item xs={12} mt={10} >
          <Typography variant="h3" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6} mb={30}>
          <Avatar
            sx={{
              backgroundColor: "#008000",
              m: "auto",
              width: 40,
              height: 40,
              
            }}
          >
           
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
            
             login(values);
              action.resetForm();
              action.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography >
            Do you have not an account?
            </Typography>
            <Link to="/register">Sign Up</Link>
          </Box>
        </Grid>

        
      </Grid>
    </Container>
  );
};

export default Login;


{/* <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid> */}