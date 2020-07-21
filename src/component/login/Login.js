
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
  import { GoogleLogin } from 'react-google-login'
import React from 'react';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () =>{
    const classes = useStyles();


    const responseGoogle = (responce) =>{
       console.log(responce.profileObj);
      axios.post("http://localhost:5000/api/user/register",responce.profileObj)
      .then(response=>{
          if(response){
            alert("product Success ");
          }else{
              alert("fiald to trangetion");
          }
      })
      }

     
    const initialValues = {
        password :'',
        email :'',
        
    }

    const onSubmit = (values) =>{
        let variables = {
          email: values.email,
          password: values.password
         
        };
        console.log(variables);
        
        axios.post("http://localhost:4000/api/register",variables)
            .then(response=>{
                if(response){
                  alert("product Success ");
                }else{
                    alert("fiald to trangetion");
                }
            })
        }

    const validationSchema = Yup.object({
        password: Yup.string().required('Enter Your Password'),
        email: Yup.string().required('Enter Your Email').email('Invild Email Formate'),
       
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
       
      <Container component="main" maxWidth="xs">
            <GoogleLogin
    clientId="233178763221-6e1fvqvabd5m0b0vqfg7d57rhghsev0t.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        <CssBaseline />
        <div className={classes.paper}>
            
          <Avatar className={classes.avatar}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="Enter Your Name"
              onChange = {formik.handleChange}
             onBlur={formik.handleBlur}
             value = {formik.values.email}
            />
             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
        <br/>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter Your Name"
              onChange = {formik.handleChange}
             onBlur={formik.handleBlur}
             value = {formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div>:null}
        <br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={formik.handleSubmit} 
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
}
//npm run create-bundle  
// npm start
export default Login;
