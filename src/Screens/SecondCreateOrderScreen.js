import React from "react";
import { Image, Form } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import clothes from "../images/Walk in the city-pana 1.png";


import { HomeStyle } from "../Style/HomeStyle";


function SecondCreateOrderScreen() {
  const classes = HomeStyle();
  return (
    <>
      <Grid container px={2} spacing={6}>
        <Grid item xs={12} md={6}>
          <h4 style={{ color: "#194B2D" }}>Complete Your Special Order</h4>
          <p style={{ color: "#848484" }}>
          Fill us in with all your travel details so we can get your

            <br />
            outfit delivered to you
          </p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>What city are you going to?</Form.Label>
              <br />
              <Form.Select size="lg" style={{fontSize:'15px'}}>
                <option>Select City</option>
              </Form.Select>
            </Form.Group>
            <br />
            <p>Where do you want to recieve your order?</p>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Form.Group controlId="name">
                  <Form.Select size="lg" style={{fontSize:'15px'}}>
                    <option>Select City</option>
                  </Form.Select>
                </Form.Group>
              </Grid>
              <Grid item sm={6}>
                <Form.Group controlId="name">
                  <Form.Control size="lg" placeholder="Zip Code" style={{fontSize:'15px'}}>
                   
                  </Form.Control>
                </Form.Group>
              </Grid>
            </Grid>
            <br  />
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Form.Group controlId="name">
                  <Form.Control size="lg" style={{fontSize:'15px'}} placeholder="Address here">
                 
                  </Form.Control>
                </Form.Group>
              </Grid>
            
            </Grid>
            <br />
            
            <Button
              className={classes.card_btn} component={Link} to="/tcreateorder"
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
              Next
            </Button>
          </Form>
        </Grid>
        <Grid item xs={12} md={6} >
          <Image src={clothes} fluid alt="No image" />
        </Grid>
      </Grid>
    </>
  );
}

export default SecondCreateOrderScreen;
