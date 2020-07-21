import React,{useState} from 'react';
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

const Register = () =>{
    const classes = useStyles();


      const [photo,setPicture] = useState();
       console.log(photo);
    const initialValues = {
        password :'',
        email :'',
        name:'',
        mobile:''
        
    }

  //   const onChangePicture = e => {
  //   //  console.log('picture: ', picture);
  //     setPicture(e.target.files[0].name);
  // };


    const onSubmit = (values) =>{
        let variables = {
          email: values.email,
          password: values.password,
          firstName:values.name,
         // profile_pic:photo
         mobile:values.mobile
          
         
        };
       // console.log(variables);
        
        axios.post("http://localhost:5000/api/user/register",variables)
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
        name: Yup.string().required('Enter Your Name'),
        email: Yup.string().required('Enter Your Email').email('Invild Email Formate'),
        mobile:Yup.number().required('Enter Your Mobile')
       
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
      <Container component="main" maxWidth="xs">
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
        name="name"
        label="Name"
        type="text"
        id="password"
        autoComplete="current-password"
        placeholder="Enter Your Name"
        onChange = {formik.handleChange}
                        onBlur={formik.handleBlur}
                        value = {formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>:null}
        <br/>
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
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mobile"
              label="Mobile"
              type="text"
              id="Mobile"
              autoComplete="current-password"
              placeholder="Enter Your Mobile"
              onChange = {formik.handleChange}
             onBlur={formik.handleBlur}
             value = {formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile ? <div>{formik.errors.mobile}</div>:null}
        <br/>
        {/* <input className="form-control" name=""  type="file" 
        onChange={onChangePicture} /> */}
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
                <Link to="/login" variant="body2">
                  {"Don't have an account? Login Up"}
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

export default Register;
