import React from "react";
import { Image } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import clothes from "../images/Thrift shop-rafiki 1.png";

import Form1 from '../Components/Form1';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { HomeStyle } from '../Style/HomeStyle';
function FourthSizeScreen() {
  const classes = HomeStyle();
  return (
    <>
      <Grid container px={2} spacing={14}>
        <Grid item xs={12} md={6}>
          <h4 style={{ color: "green" }}>
            What An Extra Tailored Look?
          </h4>
          <p style={{ color: "#848484" }}>If you know more size details,do fire away.</p>
         <Form1 />
         <Button className={classes.card_btn}   component={Link} to="/menbusywork"
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
  );
}

export default FourthSizeScreen;
