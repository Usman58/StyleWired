import React,{useState} from "react";

import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

import { HomeStyle } from "../Style/HomeStyle";
import CreateOrder from '../Components/CreateOrder';

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


function FCreateOrderScreen() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("lg"));
  const classes = HomeStyle();
  const [count, setCount] = useState(1)

  const addOutfit = () =>{
    setCount(count+1)
  }
  return (
    <>
      <Grid container px={2}>
        <Grid item xs={12}>
          <h4 style={{ color: "#194B2D" }}>Create Your Special Order</h4>
          <p style={{ color: "#848484" }}>
          Your freedom of fashion choice is what it comes down to. You choose the occasion, set the budget, and add what you need and don’t need. For an item you most certainly must have, please include a photo so our stylist can include it for you
        </p>
        </Grid>
     
      </Grid>
      {[...Array(count)].map((row, index) => (
              <CreateOrder val={index+1} />
      ))}
      
      <Grid container  px={2} style={{ justifyContent: small ? "center" : "start",textAlign: small ? "center" : "start" }}>
        <Grid item xs={12}>
      <Button className={classes.card_btn} 
            variant="contained"
            color="success"
            size="large"
            style={{ width: "350px" }}
            onClick={addOutfit}
          >
            <i class="bi bi-plus-circle"></i>Add Outfit
          </Button>
         
      </Grid>
    
      </Grid>
      <Grid container textAlign="center" justifyContent="center">
      <Grid item xs={6} >
      <Button component={Link} to="/screateorder"
              className={classes.card_btn}
              variant="contained"
              color="success"
              style={{ width: "50%" }}
            >
              Next
            </Button>
      </Grid>
     
      </Grid>
      <br /> <br />
    </>
  );
}

export default FCreateOrderScreen;
