import React from "react";
import Grid from "@mui/material/Grid";
import { Form, Button } from "react-bootstrap";

import InputAdornment from "@mui/material/InputAdornment";
import Previews from "../Components/ImageDrop";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

import { HomeStyle } from '../Style/HomeStyle';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function ImagesPricesScreen() {
  const classes = HomeStyle();
  const theme = useTheme();

  const small = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container px={2} direction="column">
        <h4>Wedding Style Profile</h4>
        <p style={{ color: "gray" }}>
          Here's the complete style profile of the user
        </p>
        <Grid container>
          <Grid item>
            <h5>Add images and prices</h5>
            <br />

            <Grid container spacing={8} style={{textAlign:small ? 'center':'none',justifyContent:small ? 'center':'none'}}>
              <Grid item lg={4} md={6}>
                <h6 style={{ textAlign: "center" }}>Image #1</h6>
                <br />
                <Previews />
                <br />
                <Form.Group controlId="name">
                  <Form.Label>Price</Form.Label><br />
                  <FormControl variant="outlined">
                    <OutlinedInput className={classes.textFieldContainer}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">$</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </FormControl>
                </Form.Group>
              </Grid>
              <Grid item lg={4} md={6}>
                <h6 style={{ textAlign: "center" }}>Image #2</h6>
                <br />
                <Previews /><br />
                <Form.Group controlId="name">
                  <Form.Label>Price</Form.Label><br />
                  <FormControl variant="outlined">
                    <OutlinedInput className={classes.textFieldContainer}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">$</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </FormControl>
                </Form.Group>
              </Grid>
              <Grid item lg={4} md={6}>
                <h6 style={{ textAlign: "center" }}>Image #3</h6>
                <br />
                <Previews /><br />
                <Form.Group controlId="name">
                  <Form.Label>Price</Form.Label><br />
                  <FormControl variant="outlined">
                    <OutlinedInput className={classes.textFieldContainer}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">$</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </FormControl>
                </Form.Group>
              </Grid>
            </Grid>
            <br />
            
          </Grid>
         
        </Grid>
        <br />
        <Button variant="success" style={{width:small?'70%':'45%',margin:small?'auto':0}}>Send for Review</Button>
        
      </Grid>
      <br /><br />
    </>
  );
}

export default ImagesPricesScreen;
