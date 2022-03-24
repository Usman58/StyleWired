import React from "react";
import Grid from "@mui/material/Grid";
import { Image } from "react-bootstrap";
import {Link} from "react-router-dom";
import PSP from "../images/PSP.png";
import FSP from "../images/FSP.png";
import WSP from "../images/WSP.png";
import { HomeStyle } from "../Style/HomeStyle";


import Button from "@mui/material/Button";


function YourStyleProfile() {
 
   const classes = HomeStyle();
  return (
    <>
     <Grid item sm={12} >
              <Grid
                item
                style={{ borderColor: "#5372E7" ,padding:'8px'}}
                className={classes.bordergrid}
              >
                <h4>Your Style Profiles</h4>
                <Grid container spacing={1}>
                  <Grid item sm={2} mb={2}>
                    <Image
                      src={PSP}
                      fluid
                      alt="No image"
                    
                    />
                  </Grid>
                  <Grid item sm={5}>
                    Party Style Profile
                    <br />
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      {" "}
                      Created 2 months ago
                    </span>
                  </Grid>
                  <Grid item sm={5} mb={2}>
                    <Button component={Link} to="/fcreateorder"
                      
                      variant="outlined"
                      color="success"
                      
                      className={classes.card_btn1}
                    >
                      <i class="bi bi-plus-circle">Create Order</i>
                    </Button>
                    <br />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item sm={2}>
                    <Image
                      src={FSP}
                      fluid
                      alt="No image"
                    
                    />
                  </Grid>
                  <Grid item sm={5} style={{fontSize: "14px" }}>
                    Formal Style Profile
                    <br />
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      {" "}
                      Created 2 months ago
                    </span>
                  </Grid>
                  <Grid item sm={5} mb={2}>
                    <Button
                      
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <i class="bi bi-plus-circle">Create Order</i>
                    </Button>
                    <br />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item sm={2}>
                    <Image
                      src={WSP}
                      fluid
                      alt="No image"
                    
                    />
                  </Grid>
                  <Grid item sm={5}>
                   <span style={{fontSize:'14px'}}>Wedding Style Profile</span>
                    <br />
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      {" "}
                      Created 2 months ago
                    </span>
                  </Grid>
                  <Grid item sm={5} mb={2}>
                    <Button
                      
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <i class="bi bi-plus-circle">Create Order</i>
                    </Button>
                    <br />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item sm={2}>
                    <Image
                      src={WSP}
                      fluid
                      alt="No image"
                    
                    />
                  </Grid>
                  <Grid item sm={5}>
                  <span style={{fontSize:'14px'}}>Wedding Style Profile</span>
                    <br />
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      {" "}
                      Created 2 months ago
                    </span>
                  </Grid>
                  <Grid item sm={5} mb={2}>
                    <Button
                      
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <i class="bi bi-plus-circle">Create Order</i>
                    </Button>
                    <br />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item sm={2}>
                    <Image
                      src={WSP}
                      fluid
                      alt="No image"
                    
                    />
                  </Grid>
                  <Grid item sm={5}>
                  <span style={{fontSize:'14px'}}>Wedding Style Profile</span>
                    <br />
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      {" "}
                      Created 2 months ago
                    </span>
                  </Grid>
                  <Grid item sm={5}>
                    <Button
                      
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <i class="bi bi-plus-circle">Create Order</i>
                    </Button>
                    <br />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

    </>
  );
}

export default YourStyleProfile;
