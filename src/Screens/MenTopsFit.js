import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Image, Card } from "react-bootstrap";
import { HomeStyle } from "../Style/HomeStyle";
import {Link} from "react-router-dom";
import $ from "jquery";
import img1 from "../images/Regular.png";
import img2 from "../images/Slim.png";

import DR from "../images/Thrift shop-rafiki 1.png";


function MenTopsScreen() {
  const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState("");
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent;
    var ID = $(ins).attr("id");
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID);
  };

  return (
    <>
      <Grid container  spacing={6} style={{paddingLeft:small?'30px':'auto'}}>
        <Grid item  md={5} xs={12} >
          <h4 style={{ color: "green" }}>Whats Style Of Top Fits You Best?</h4>
          <p style={{ color: "#848484" }}>
          Whatever trim suits you most.
          </p><br />
        <Grid container  spacing={3} textAlign="center" >

          <Grid item sm={12} md={6} >
            <Card
            
              id="Fitted"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                wordWrap: 'normal',
                borderColor:
                  cardActive === "Fitted" ? "green" : "rgba(0,0,0,.125)",
              }}
              className="custom_cards   p-3"
              onClick={activeHandler}
            >
              <Card.Img src={img1} height='275' />
              <Card.Body>
                <Card.Title>Regular</Card.Title>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card
              id="Straight"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                wordWrap: 'normal',
                borderColor:
                  cardActive === "Straight" ? "green" : "rgba(0,0,0,.125)",
              }}
              className="custom_cards p-3 w-100"
              onClick={activeHandler}
            >
              <Card.Img src={img2} height='280' />
              <Card.Body style={{ padding: '13px' }}>
                <Card.Title className='w-100'>Slim</Card.Title>
              </Card.Body>
            </Card>
          </Grid>
          
        </Grid> <br />
        <Button variant="contained" color="success" className={classes.card_btn} style={{width:small?'90%':'100%'}} component={Link} to="/bottomsuit">
                Next
              </Button><br />
       
        </Grid>
        
        <Grid item md={7} xs={12}>
          <Image src={DR}  fluid alt="No image" />
        </Grid>
      </Grid>
     

    </>
  );
}

export default MenTopsScreen;
