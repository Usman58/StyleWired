import React from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Image } from "react-bootstrap";
import Footer from '../Layout/Footer';
import { HomeStyle } from '../Style/HomeStyle';
import group from "../images/Group 2050.png";
import {Link} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";


function HomeScreen() {
  const classes = HomeStyle();
  const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Grid container spacing={8}>
        <Grid item  xs={12} md={6} mt={8}>
          <Card variant="outlined" className="shadow pb-2 pt-3 text-center" >
            <CardContent >
              <Typography variant="h4" component="div" className={classes.card1}> 
              You Got Us Wondering: What’s<br />Your Style Profile?
                

              </Typography><br />
              <Button variant="outlined"  color="success" size="large" className={classes.tab_btn} style={{width:small?'100%':'75%'}}>
              I have one, Create an Order
              </Button>
              <Button variant="contained" color="success" style={{width:small?'100%':'75%'}} className={classes.card_btn} component={Link} to="/createnewstyleprofile">
              Create a new Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={group} fluid alt="No image"/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default HomeScreen;
