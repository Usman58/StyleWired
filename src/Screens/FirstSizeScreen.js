import React from 'react'
import { Image} from 'react-bootstrap'
import Grid from "@mui/material/Grid";
import {Form} from 'react-bootstrap';
import Button from "@mui/material/Button";
import  clothes from '../images/clothes.png';
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";
import DropDown from "../Components/DropDown";
function FirstSizeScreen() {
  const classes = HomeStyle();
    return (
      <>
      <Grid container px={2} spacing={14}> 
        <Grid item  xs={12} md={6}>
          <h4 style={{color:'#194B2D'}}>What’s Your Usual Size? 
</h4>
          <p style={{ color: "#848484" }}>
          Do tell us what sizes of clothing you normally wear.
          </p>
          <Form>
          <Form.Group controlId='name'>
              <Form.Label>Tops (e.g blouses)</Form.Label>
              <DropDown />
            </Form.Group>
          
            <Grid container mt={1} spacing={2}> 
              <Grid item  xs={12} md={6}>
              <Form.Group controlId='name'>
                <Form.Label>Bottoms(Trousers)</Form.Label>
                <DropDown />
            </Form.Group>
              </Grid>
              <Grid item  xs={12} md={6}>
              <Form.Group controlId='name'>
                <Form.Label>Footwear</Form.Label>
                <DropDown />
            </Form.Group><br/>
              </Grid>
            </Grid>
            <Form.Group controlId='name'>
              <Form.Label>Bra Size</Form.Label>
              <DropDown />
            </Form.Group><br/>
            <br/> <br/> 
            <Button variant="contained" color="success" style={{width:'100%'}} className={classes.card_btn}      component={Link} to="/extrasize" >
            Next
              </Button>
            </Form>
            
        </Grid>
        <Grid item  xs={12} md={6} >
        <Image src={clothes} fluid alt="No image" />
        </Grid>
      </Grid>
        
      </>
    );
  }
  
  export default FirstSizeScreen;