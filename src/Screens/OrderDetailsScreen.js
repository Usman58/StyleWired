import React from "react";
import Grid from "@mui/material/Grid";
import {Table,Button } from "react-bootstrap";

import {Link} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { HomeStyle } from "../Style/HomeStyle";

function OrderDetailsScreen() {
  const theme = useTheme();
  const classes = HomeStyle();
  const small = useMediaQuery(theme.breakpoints.down("md"));
 
  
  return (
    <>
      <Grid container px={2} direction="column">
        <h5>Order Id: 20202020</h5>
        <p style={{ color: "gray" }}>
          Check all the style Profiles associated with this order
        </p>
        <Grid container  >
          <Grid item >
            <h5>Order Details</h5>
            <Grid container>
              <Grid item >
                <Table responsive borderless >
                  <thead>
                    <tr style={{ color: "#5AB27E" }}>
                      <th>Request Date</th>

                      <th>Budget</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "#828282" }}>23-4-2021</td>

                      <td style={{ color: "#B7B94B" }}>$320.00</td>
                      <td style={{ color: "#5372E7" }}>Confirmed</td>
                    </tr>
                  </tbody>
                </Table>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <h5>Style Profiles</h5>
        <hr />
        <Grid container style={{marginTop: small ? "5px" : "auto"}}>
          <Grid item md={3} xs={12} >
            <h6>Style Profile# 1</h6>
            <p style={{ color: "gray" }}>Wedding Style Profile</p>
          </Grid>
          <Grid item md={3} xs={12}>
          <Button variant="success"><Link to="/vieweachstyleprofiles" style={{color:"white",textDecoration:'none'}}> View Style Profile</Link> </Button>{' '}{' '}<br /><br />
          </Grid>
          <Grid item md={6} xs={12}>
          <Button  variant="outline-success" style={{width:'60%'}} href="/addsuggestion">Add Suggesstions</Button><br /><br /><br />
          </Grid>
        </Grid>
        <Grid container style={{marginTop: small ? "5px" : "auto"}}>
          <Grid item md={3} xs={12}>
            <h6>Style Profile# 1</h6>
            <p style={{ color: "gray" }}>Formal Style Profile</p>
          </Grid>
          <Grid item md={3} xs={12}>
          <Button variant="success"><Link to="/vieweachstyleprofiles" style={{color:"white",textDecoration:'none'}}> View Style Profile</Link> </Button>{' '}<br /><br />
          </Grid>
          <Grid item md={6} xs={12}>
          <Button  variant="outline-success" style={{width:'60%'}} href="/addsuggestion">Add Suggesstions</Button>{' '}<br /><br /><br />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} xs={12}>
            <h6>Style Profile# 1</h6>
            <p style={{ color: "gray" }}>Casual Style Profile</p>
          </Grid>
          <Grid item md={3} xs={12}>
          <Button variant="success"><Link to="/vieweachstyleprofiles" style={{color:"white",textDecoration:'none'}}> View Style Profile</Link> </Button>{' '}<br /><br />
          </Grid>
          <Grid item md={6} xs={12}>
          <Button variant="outline-success" style={{width:'60%'}} href="/addsuggestion">Add Suggesstions</Button><br /><br /><br />
          </Grid>
        </Grid>

        <br />
      </Grid>
    </>
  );
}

export default OrderDetailsScreen;
