import React from 'react'
import { Typography,Grid,Button, TextField,Checkbox ,FormGroup,FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import stylistLogin from '../images/stylistLogin.png'
import uploadCvBtn from '../images/uploadCvBtn.png'
import {FormControl,OutlinedInput} from '@mui/material'
import { Form } from "react-bootstrap";
import { Link } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DropdownMenu from '../Components/DropdownMenu'

const useStyles = makeStyles({
  title:{
    '& .MuiTypography-root':{
      fontWeight:'bold'
    },
  },
  title1:{
    '& .MuiTypography-root':{
      fontWeight:'bold',
      fontSize:'1.11rem'
    },
  },
  subTitle:{
      color:'#5AB27E'
  },
  btnContainer:{ 
    '& .MuiButton-root':{
          color:'#ffff',
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
  },
  uploadCvBtn:{
      '& .MuiButton-root':{
          padding:'10px 0px',
          textTransform:'none',
      } 
  }
  
});

function StarterStylistLogin() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

    const classes = useStyles();
    return (
        <Grid container spacing={2}   direction={largeScreen?"row":"column"}  >

            <Grid item xs={12} sm={6} style={{width: '100%'}} >
                <Grid item p={5} >
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h5" gutterBottom component="div" >
                            Hello, Welcome Back
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom component="div" className={classes.subTitle} >
                            Already part of Stylewired?
                        </Typography>
                    </Grid>
                    <Form>
                    <Grid pb={1} pt={3} container direction='row' spacing={2} >
                        <Grid item xs={12} sm={6} >
                                <Form.Group controlId="name">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control className={classes.inputF} type="email" placeholder="abdullah12@gmail.com"></Form.Control>
                                </Form.Group>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                                <Form.Group controlId="name">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className={classes.inputF} type="password" placeholder="Should be At lease 8 characters"></Form.Control>
                                </Form.Group>
                        </Grid>
                    </Grid>

                    <Grid container pb={1} justifyContent='space-between'>
                        <Grid item >
                            <FormGroup className={classes.checkText} >
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="Keep me logged in" />
                            </FormGroup>
                        </Grid>
                        <p  className='text-center pt-1'><a href='/' style={{textDecoration:'none',color:'black'}}>Forgot Password?</a></p>
                    </Grid>

                    <Grid item xs={12} className={classes.btnContainer}>
                        <Button  variant="contained"  className={classes.btn} fullWidth>Login</Button>
                    </Grid>
                    </Form>

                    <Grid item xs={12} className={classes.title1} pt={4}>
                        <Typography variant="h6" gutterBottom component="div" >
                            You have what is takes to join the Stylewired Community as a Stylist?
                        </Typography>
                    </Grid>

                    <Form>
                        <Grid pb={1} pt={3} container direction='row' spacing={2} >
                            <Grid item xs={12}sm={6} >
                                    <Form.Group controlId="name">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control className={classes.inputF} type="email" placeholder="abdullah12@gmail.com"></Form.Control>
                                    </Form.Group>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className={classes.inputF} type="text" placeholder="John Smith"></Form.Control>
                                    </Form.Group>
                            </Grid>
                        </Grid>
                        <Grid item  >
                            <DropdownMenu />
                        </Grid>
                        <Grid pb={1} pt={1} container direction='row' justifyContent='space-between' alignItems='end' spacing={2} >
                            <Grid item xs={12} sm={5} >
                                    <Form.Group controlId="name">
                                        <Form.Label>Linkedin Profile Link</Form.Label>
                                        <Form.Control className={classes.inputF} type="text" ></Form.Control>
                                    </Form.Group>
                            </Grid>
                            <Grid item xs={12} sm={1} >
                                <p  className=''></p>
                                <p  className='text-center'>or</p>
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.uploadCvBtn} >
                                    <Button variant="outlined" fullWidth  >
                                           <img src={uploadCvBtn} className='px-2'/> Upload CV
                                    </Button>
                            </Grid>
                        </Grid>
                        <Grid item pt={2} xs={12} className={classes.btnContainer}>
                            <Button  variant="contained"  className={classes.btn} fullWidth>Login</Button>
                        </Grid>
                    </Form>

                </Grid>
            </Grid>

            <Grid item xs={12}sm={6}>
                <img src={stylistLogin} className='w-100'/>
            </Grid>
            
            
        </Grid>
    )
}

export default StarterStylistLogin
