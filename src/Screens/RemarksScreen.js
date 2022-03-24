import React from 'react';
import Grid from "@mui/material/Grid";
import {Form} from 'react-bootstrap';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { HomeStyle } from '../Style/HomeStyle';



function RemarksScreen() {
    const classes = HomeStyle();
    return (
      <>
     <Grid container   textAlign="center" > 
        <Grid item  xs={12} >
          <h4 style={{color:'#194B2D'}}>Any Final Fashion Insights To Share With Us?</h4><br />
          <p style={{ color: "#848484" }}>Fill us in on any details that will make your experience special.</p>
         
          <Form className={classes.Sform}>
          <Form.Group controlId='name' style={{width:'45%'}}>
              
                    <Form.Control style={{backgroundColor:'#FAFAFA'}}
                       
                        rows="8"
                        placeholder='Your Remarks here...'
                        as="textarea"
                    >
                    </Form.Control>
                    <p style={{textAlign:'end',color:'gray'}}><span >500 characters</span></p>
                </Form.Group>
                <Button className={classes.card_btn} component={Link} to="/gotpictures"
            variant="contained"
            size="large"
            color="success"
            style={{ width: "25%"}}
          >
            Next
          </Button>
                </Form>
                
        </Grid>
    
      </Grid>
      </>
    );
  }
  
  export default RemarksScreen;