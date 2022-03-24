import React from 'react'
import { Typography,Grid,Button, TextField,Checkbox ,FormGroup,FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import starterImg from '../images/starter.png'
import {FormControl,OutlinedInput} from '@mui/material'
import { Form } from "react-bootstrap";
import googleIcon from '../images/googleIcon.png'
import { Link } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  title:{
    '& .MuiTypography-root':{
      fontWeight:'bold'
    },
  },
  subTitle:{
      width:'390px',
      color:'#5AB27E',
      [theme.breakpoints.down('md')]:{width:'auto',}
  },
  btnContainer:{ 
    '& .MuiButton-root':{
          color:'#ffff',
          padding:'10px 0px',
          textTransform:'none',
    },  
  },
  googleBtnContainer:{
    '& .MuiButton-root':{
          color:'#E5792C',
          borderColor:'#E5792C',
          padding:'10px 0px',
          textTransform:'none',
    },
  },
  inputF:{
      padding:'10px'
  },
  checkText:{
      '& .MuiTypography-root':{
        fontSize:'13px'
      }
  }
  
}));

function StarterSignUp() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const small = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const classes = useStyles();
    return (
        <Grid container>
            <Grid container spacing={small?0:2}    >

                <Grid item md={6} sm={12} >
                    <Grid item p={small?5:10} >
                        <Grid item className={classes.title}>
                            <Typography variant="h5" gutterBottom component="div" >
                                Let’s Get Started
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="subtitle1" gutterBottom component="div" className={classes.subTitle} >
                                Sign up now to get free access to Stylewired
                            </Typography>
                        </Grid>
                        <Grid item sx={12} pb={2}>
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className={classes.inputF} type="text" placeholder="John Smith"></Form.Control>
                                    </Form.Group>
                                </Form>
                        </Grid>
                        <Grid pb={2} container  spacing={2} >
                            <Grid item xs={6} >
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control className={classes.inputF} type="email" placeholder="abdullah12@gmail.com"></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Grid>
                            <Grid item xs={6} >
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control className={classes.inputF} type="number" placeholder="0483-38497483"></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Grid>
                        </Grid>
                        <Grid pb={2} container direction='row' spacing={2} >
                            <Grid item xs={6} >
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className={classes.inputF} type="password" placeholder="At least 8 characters"></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Grid>
                            <Grid item xs={6} >
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control className={classes.inputF} type="password" placeholder="Repeat Password"></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Grid>
                        </Grid>
                        <Grid item pb={2}>
                            <FormGroup className={classes.checkText} >
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="By creating an account you agree to the terms of use and our privacy policy." />
                            </FormGroup>
                        </Grid>
                        <Grid item className={classes.btnContainer}>
                            <Button  variant="contained"  className={classes.btn} fullWidth>Create an Acount</Button>
                        </Grid>
                        <p  className='text-center pt-2'>or</p>
                        <Grid item className={classes.googleBtnContainer}>
                            <Button  variant="outlined"  className={classes.btn} fullWidth>
                                <img src={googleIcon} className='px-2' style={{height:'20px',width:'37px'}} />
                                Sign Up with Google
                            </Button>
                        </Grid>
                        <p  className='text-center pt-2'>Already have an account? <a href='/' style={{textDecoration:'none',color:'#5AB27E'}}>Login</a></p>
                    </Grid>
                </Grid>

                <Grid item md={6} sm={12}>
                    <img src={starterImg} className='w-100'/>
                </Grid>

                
            </Grid>
        </Grid>
    )
}

export default StarterSignUp
