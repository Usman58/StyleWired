import React from 'react'
import { Typography,Grid,Button, TextField,Checkbox ,FormGroup,FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import starterLogin from '../images/starterLogin.png'
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

function StarterLogin() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const mediam = useMediaQuery(theme => theme.breakpoints.down('md'));

    const classes = useStyles();
    return (
        <Grid container spacing={2}   direction={largeScreen?"row":"column"}  >

            <Grid item xs={6}  >
                <Grid item p={mediam?5:10} >
                    <Grid item className={classes.title}>
                        <Typography variant="h4"  component="div" >
                            Hello,
                        </Typography>
                        <Typography variant="h4" gutterBottom component="div" >
                            Welcome Back
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="subtitle1" gutterBottom component="div" className={classes.subTitle} >
                            Please Login to continue to Stylewired
                        </Typography>
                    </Grid>
                    <Grid item py={2} >
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control className={classes.inputF} type="text" placeholder="John Smith"></Form.Control>
                                </Form.Group>
                            </Form>
                    </Grid>
                    <Grid item pb={2} >
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className={classes.inputF} type="password" placeholder="At least 8 characters"></Form.Control>
                                </Form.Group>
                            </Form>
                    </Grid>
                    
                    <Grid container pb={2} justifyContent='space-between'>
                        <Grid item >
                            <FormGroup className={classes.checkText} >
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="Keep me logged in" />
                            </FormGroup>
                        </Grid>
                        <p  className='text-center pt-2'><a href='/' style={{textDecoration:'none',color:'black'}}>Forgot Password?</a></p>
                    </Grid>
                    


                    <Grid item className={classes.btnContainer}>
                        <Button  variant="contained"  className={classes.btn} fullWidth>Login</Button>
                    </Grid>
                    <p  className='text-center pt-2'>or</p>
                    <Grid item className={classes.googleBtnContainer}>
                        <Button  variant="outlined"  className={classes.btn} fullWidth>
                            <img src={googleIcon} className='px-2' style={{height:'20px',width:'37px'}} />
                            Login with Google
                        </Button>
                    </Grid>

                    <p  className='text-center pt-2'>Don’t have an account yet? <a href='/' style={{textDecoration:'none',color:'#5AB27E'}}>Signup</a></p>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <img src={starterLogin} className='w-100'/>
            </Grid>

            
        </Grid>
    )
}

export default StarterLogin
