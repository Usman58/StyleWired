import React from "react";
import { Image } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import OWLP from "../images/Online.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";


function LetsTalk() {
  const classes = HomeStyle();
  return (
    <>
      <Grid container spacing={14} px={2} marginBottom={5}>
        <Grid item xs={12} md={6}>
          <h4 style={{ color: "#194B2D" }}>Now Let’s Get Personal</h4>
          <p style={{ color: "#848484" }}>Those unique details that make you you—tell us all about them.</p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>How old do you feel?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tell us about your feelings"
              ></Form.Control>
            </Form.Group>
            <br />

            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Form.Group controlId="name">
                  <Form.Label>Your Height</Form.Label>
                  <br />
                  <FormControl variant="outlined">
                    <OutlinedInput className={classes.textFieldContainer}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">cm</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </FormControl>
                </Form.Group>
              </Grid>
              <Grid item sm={6} >
                <Form.Group controlId="name" >
                  <Form.Label>Your Weight</Form.Label>
                  <br />
                  <FormControl  variant="outlined" >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">kgs</InputAdornment>
                      }
                      className={classes.textFieldContainer}
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </FormControl>
                </Form.Group>
                <br />
              </Grid>
            </Grid>
            <Form.Group controlId="name">
              <Form.Label>Your Eye Color</Form.Label>
              <Form.Select>
                <option>Select Color</option>
              </Form.Select>
            </Form.Group>
            <br />
            
            <Form.Group controlId="name">
              <Form.Label>Current Hair Color</Form.Label>
              <Form.Select>
                <option>Select Color</option>
              </Form.Select>
            </Form.Group>
            <br />
            <Button className={classes.card_btn} component={Link} to="/usualsize" 
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
            Next
            </Button>
          </Form>
          
        </Grid>
        
        <Grid item xs={12} md={6} mt={6}>
          <Image src={OWLP} fluid alt="No image" />
        </Grid>
        
      </Grid>
     
    </>
  );
}

export default LetsTalk;
