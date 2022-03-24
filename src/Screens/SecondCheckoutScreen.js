import React from "react";
import { Form,Image } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import clothes from "../images/Date picker-rafiki 1.png";
import { HomeStyle } from "../Style/HomeStyle";
//import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";

function SecondCheckoutScreen() {
    const classes = HomeStyle();
  return (
    <>
      <Grid container px={2} spacing={14}>
        <Grid item xs={12} lg={7} md={12}>
          <h4 style={{ color: "green" }}>
          You’re Almost Done!
          </h4><br />
          <p    style={{ color: "#848484"}}>You choose the time and date—we’ll take care of the rest</p><br />
          <p    style={{ color: "#848484",fontSize:'20px' }}>Select Date and Time</p><br />
          <Form>
          <Form.Group controlId='name'>
            
              <Form.Control type="date" size="lg" style={{fontSize:'17px'}} >
              
              </Form.Control>
            </Form.Group>
          <br />
        <Grid container spacing={2}>
            <Grid item xs={5}>
            <Form.Group controlId='name'>
            
            <Form.Select size="lg" style={{fontSize:'17px'}} >
            <option>19:00</option>
            </Form.Select>
          </Form.Group>
            </Grid>
            <Grid item xs={5}>
            <Form.Group controlId='name'>
            
            <Form.Select size="lg" style={{fontSize:'17px'}} >
            <option>20:00</option>
            </Form.Select>
           
            
          </Form.Group>
            </Grid>
            <Grid item xs={2}>
            <Form.Group controlId='name'>
            
            <Form.Select size="lg" style={{fontSize:'17px',backgroundColor:'#585858', color:'white'}} >
            <option>AM</option>
            <option>PM</option>
            </Form.Select>
           
            
          </Form.Group>
            </Grid>
        </Grid>
        <br />
        <Form.Group controlId='name'>
            
            <Form.Control size="lg" style={{fontSize:'17px'}} placeholder="Pick up Address here">
           
            </Form.Control>
          </Form.Group>
          <br />
          <Button
              className={classes.card_btn} component={Link} to="/payment"
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
              Proceed to Payment
            </Button>
        </Form>
        </Grid>
        <Grid item xs={12} lg={5} md={12} style={{height:'95vh',width:'100%'}} pr={3}>
          <Image src={clothes} fluid alt="No image"  className='h-100 w-100 ' />
        </Grid>
      </Grid>
    </>
  );
}

export default SecondCheckoutScreen;
