import React from 'react'
import { Image} from 'react-bootstrap'
import Grid from "@mui/material/Grid";
import {Form} from 'react-bootstrap';
import Button from "@mui/material/Button";
import  clothes from '../images/Thrift shop-rafiki 1.png';
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";
import DropDown from "../Components/DropDown";

function ThirdSizeScreen() {
  const classes = HomeStyle();
    return (
      <>
      <Grid container px={2} spacing={14}> 
        <Grid item  xs={12} lg={6}>
          <h4 style={{color:'green'}}>What sizes Do you Usually wear?</h4>
          <p style={{ color: "#848484" }}>
              Whatever your go-to sizes are,fill us in.
          </p>
          <Form>
          <Form.Group controlId='name'>
              <Form.Label>Tops(e.g blouses)</Form.Label>
              <DropDown />
            </Form.Group>
          
            <Grid container mt={1} spacing={2}> 
              <Grid item  md={6} xs={12}>
              <Form.Group controlId='name'>
                <Form.Label>Bottoms(Trousers)</Form.Label>
                <DropDown />
            </Form.Group>
              </Grid>
              <Grid item  md={6} xs={12}>
              <Form.Group controlId='name'>
                <Form.Label>Footwear</Form.Label>
                <DropDown />
            </Form.Group><br/>
              </Grid>
            </Grid>
            <Form.Group controlId='name'>
              <Form.Label>Blazer</Form.Label>
              <DropDown />
            </Form.Group><br/>
            <Form.Group controlId='name'>
              <Form.Label>Formal Shirt(Optional)</Form.Label>
              <DropDown />
            </Form.Group>
            <br/>
            <Button variant="contained" component={Link} to="/extratailoredlook"
            color="success" style={{width:'100%'}} className={classes.card_btn} >
                Next
              </Button>
            </Form>
           <br /><br /> 
        </Grid>
        <Grid item  xs={12} lg={6} margin="auto">
        <Image src={clothes} fluid alt="No image" />
        </Grid>
      </Grid>
        
      </>
    );
  }
  
  export default ThirdSizeScreen;