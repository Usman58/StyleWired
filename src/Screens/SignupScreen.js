import React from "react";
import { Image } from "react-bootstrap";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import { Form } from "react-bootstrap";

import clothes from "../images/Login-pana 1.png";
import Glogo from "../images/Google-logo-2015-G-icon.png";
import {Link} from "react-router-dom";
import { HomeStyle } from "../Style/HomeStyle";
import {Grid,Button, Checkbox ,FormGroup,FormControlLabel } from '@mui/material';

function SignupScreen() {
  const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("md"));
  
  const classes = HomeStyle();
  return (
    <>
      <Grid container px={2} spacing={14}>
        <Grid item xs={12} lg={6}>
          <h4 style={{ color: "#194B2D" }}>
          One More Step Away From Your On-The-Go Fashion Outfit 
          </h4>
          <p style={{ color: "#848484" }}>Just a quick sign up to get it all official for you.</p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Smith"></Form.Control>
            </Form.Group>
            <Grid container mt={1} spacing={2}>
              <Grid item md={6} xs={12}>
                <Form.Group controlId="name">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    size="lg"
                    className={classes.formSelect}
                    type="email"
                    placeholder="abdullah12@gmail.com"
                  ></Form.Control>
                </Form.Group>
              </Grid>
              <Grid item md={6} xs={12}>
                <Form.Group controlId="name">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    size="lg"
                    className={classes.formSelect}
                    type="text"
                    placeholder="0483-38497483"
                  ></Form.Control>
                </Form.Group>
              </Grid>
            </Grid>
            <Grid container mt={1} spacing={2}>
              <Grid item md={6} xs={12}>
                <Form.Group controlId="name">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="lg"
                    className={classes.formSelect}
                    type="email"
                    placeholder="at least 8 characters"
                  ></Form.Control>
                </Form.Group>
              </Grid>
              <Grid item md={6} xs={12}>
                <Form.Group controlId="name">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    size="lg"
                    className={classes.formSelect}
                    type="text"
                    placeholder="Repeat password"
                  ></Form.Control>
                </Form.Group>
                <br />
              </Grid>
            </Grid>
            
            
             <FormGroup className={classes.checkText} >
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="By creating an account you agree to the terms of use and our privacy policy." />
                            </FormGroup>
            <Button className={classes.card_btn} component={Link} to="/setthanks"
              variant="contained"
              color="success"
              style={{ width: "100%",marginBottom:'10px'}}
            >
              Create an Account
            </Button>
            
            <p style={{textAlign:'center'}}>or</p>
            
          
              <Grid container>
                  <Grid item className='w-100'>
                  <Button variant="outlined"  style={{color:'#E5792C',border:'1px solid #E5792C'}} className={classes.card_btn} >
                   
                     <Grid style={{display:'flex'}} >
                      <Grid style={{height:'28px',width:'100%',display:'flex'}}>
                          <Image src={Glogo} fluid alt="No image" />
                          <p>Sign Up with Google</p>
                       </Grid>
                       
                      
                       </Grid>
                
           
              </Button>
              
                  </Grid>
                  
              </Grid>
          </Form>
          <br />
          <p className="text-center">Already have an account?<span style={{color:'green'}}>Login</span></p>
          
        </Grid>
        <Grid item xs={12} lg={6} style={{marginTop:small?'auto':'80px'}}>
          <Image src={clothes} fluid alt="No image" />
        </Grid>
      </Grid>
    </>
  );
}

export default SignupScreen;
