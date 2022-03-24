import React from "react";
import { Form,Image } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import clothes from "../images/Online shopping-pana 1.png";
import { HomeStyle } from "../Style/HomeStyle";
//import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";

function CheckoutScreen() {
    const classes = HomeStyle();
  return (
    <>
      <Grid container px={2} spacing={14}>
        <Grid item xs={12} md={6} mt={2}>
          <h4 style={{ color: "#194B2D" }}>
          Any Needed Ad-Ons Before Checkout?
          </h4>
          <p    style={{ color: "#848484" }}>Let us know so we can be sure to include them.</p><br />
          <Form>
          <Form.Group controlId='name'>
            
              <Form.Select size="lg" style={{fontSize:'17px'}} >
              <option>Select Add-on</option>
              </Form.Select>
            </Form.Group>
          <br />
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Form.Group controlId='name'>
            
            <Form.Select size="lg" style={{fontSize:'17px'}} >
            <option>Select City</option>
            </Form.Select>
          </Form.Group>
            </Grid>
            <Grid item xs={6}>
            <Form.Group controlId='name'>
            
            <Form.Control size="lg" style={{fontSize:'17px'}} placeholder="Zip Code">
           
            </Form.Control>
          </Form.Group>
            </Grid>
        </Grid>
        <br />
        <Form.Group controlId='name'>
            
            <Form.Control size="lg" style={{fontSize:'17px'}} placeholder="Delivery Address here">
           
            </Form.Control>
          </Form.Group>
          <br />
          <Button
              className={classes.card_btn} component={Link} to='/selectdateandtime'
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
              Choose Date and Time
            </Button>
        </Form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={clothes} fluid alt="No image"  className='h-100 w-100 ' />
        </Grid>
      </Grid>
    </>
  );
}

export default CheckoutScreen;
