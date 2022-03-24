import React from "react";
import { Image } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { HomeStyle } from '../Style/HomeStyle';
import clothes from "../images/clothes.png";

import Form1 from '../Components/Form1';


function SecondSizeScreen () {
  const classes = HomeStyle();
  return (
    <>
      <Grid container px={2} spacing={14}>
        <Grid item xs={12} md={6}>
          <h4 style={{ color: "green" }}>
            Want An Extra Tailored Fit?
          </h4>
          <p style={{ color: "#848484" }}>Because quality is always in the details, do share with us any other sizes</p>
         <Form1 />
           <Button className={classes.card_btn}   component={Link} to="/whatsfemine"
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
              Next
            </Button>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Image src={clothes} fluid alt="No image" />
        </Grid>
      </Grid>
    </>
  )
}

export default SecondSizeScreen 
