import React from "react";

import Grid from "@mui/material/Grid";
import { Form } from "react-bootstrap";
import DropDown from "../Components/DropDown";
import { HomeStyle } from '../Style/HomeStyle';

function Form1() {
    const classes = HomeStyle();
  return (
    <>
      
          <Form className={classes.formSelect}>
            <Grid container mt={1} spacing={2}>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Neck</Form.Label>
                  <DropDown />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Waist</Form.Label>
                  <DropDown />
                </Form.Group>
              </Grid>
            </Grid>

            <Grid container mt={1} spacing={2}>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Bust</Form.Label>
                  <DropDown />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Hips</Form.Label>
                  <DropDown />
                </Form.Group>
              </Grid>
            </Grid>
            <Grid container mt={1} spacing={2}>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Shoulder</Form.Label>
                  <DropDown />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Inside leg</Form.Label>
                  <DropDown />
                </Form.Group>
              </Grid>
            </Grid>
            <br />
          
          </Form>
        
    </>
  );
}

export default Form1;
