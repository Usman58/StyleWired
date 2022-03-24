import React from 'react'
import { Image} from 'react-bootstrap'
import Grid from "@mui/material/Grid";
import {Form} from 'react-bootstrap';
import Button from "@mui/material/Button";
import  clothes from '../images/Online shopping-pana 1.png';
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";

function CompleteStyleProfile() {
  const classes = HomeStyle();
    return (
      <>
      <Grid container px={2} spacing={6}> 
        <Grid item  xs={12} md={6} mt={4} >
          <h4 style={{color:'#194B2D'}}>You’re Perfectly Set—Thanks!</h4>
          <p style={{ color: "#848484" }}>
          One of our professional stylists will have a browse through and<br /> get in touch with you. Want to create another style profile for <br/>someone you’re traveling with?


          </p>
          <p>Are you traveling alone do you want to create another style profile?</p><br />
          <Form>
            <Button variant="contained" color="success"  style={{width:'80%'}} className={classes.card_btn} component={Link} to="/customerdashboard"
            >
                Yes,I want to create another style profile
              </Button><br /><br />
              <Button variant="outlined"  color="success" style={{width:'80%'}} size="large" className={classes.card_btn}>
              No,Its Just me
              </Button>
            </Form>
            
        </Grid>
        <Grid item  xs={12} md={6} mt={5}>
        <Image src={clothes} fluid alt="No image" />
        </Grid>
      </Grid>
        
      </>
    );
  }
  
  export default CompleteStyleProfile;