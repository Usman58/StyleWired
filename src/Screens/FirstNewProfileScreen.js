import React from 'react';
import Grid from "@mui/material/Grid";
import {Form} from 'react-bootstrap';
import Button from "@mui/material/Button";
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";

function FirstNewProfileScreen() {
    const classes = HomeStyle();
    const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <>
     <Grid container   textAlign="center" p={8}> 
        <Grid item  xs={12} >
          <h4 style={{color:'#194B2D'}}>Let’s Talk Your Fashion</h4>
          <p style={{ color: "#848484" }} >
          But first thing’s first: hello, welcome, and what’s your name?
          </p><br />
          <Form className={classes.Sform}>
          <Form.Group controlId='name'  style={{width:small?'100%':'40%'}}>
              <Form.Label className={classes.fm_lb}>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='John Smith'
                    >
                    </Form.Control>

                </Form.Group>
                <Form.Group controlId='name'style={{width:small?'100%':'40%'}}>
                <Form.Label className={classes.fm_lb}>Profile Name</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='John Smith'
                    >
                    </Form.Control>

                </Form.Group>
                <Button className={classes.card_btn} component={Link} to="/whatspick"
              variant="contained"
              color="success"
              style={{ width: "30%"}}
            >Next
              
            </Button>
            
          
                </Form>
        </Grid>
    
      </Grid>
        
      </>
    );
  }
  
  export default FirstNewProfileScreen;