import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";
import {Helmet} from "react-helmet";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>Blog-Register</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initial
            initialValues={{
              username: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting();
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Do you have an account?</Link>
          </Box>
        </Grid>

    
      </Grid>
    </Container>
  );
};

export default Register;
