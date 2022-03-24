import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/AP.png";
import image5 from "../images/FP.png";
import image6 from "../images/GP.png";
import image7 from "../images/BP.png";
import { Card} from "react-bootstrap";
import $ from 'jquery'

import {Link} from "react-router-dom";

import { HomeStyle } from '../Style/HomeStyle';



function StylistScreen() {
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState('')
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID)
  }

  return (
    <>
      <Grid container textAlign="center">
        <Grid item sm={12}>
          <h4 style={{ color: "green" }}>Any Fashion No-Nos?</h4>
          <p  style={{ color: "#848484" }}>What pattern should your stylist never pick for you? </p>
          
          <Grid container textAlign="center" spacing={10} px={10}>
            <Grid item xs={12} sm={6} lg={3} mt={5}>
              <Card id='man' style={{ padding:'12px',
                borderColor: cardActive === 'man' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image4} height='350' />
              
              </Card>
              <h6 style={{paddingTop:'5px'}}>Animal print</h6>
              
            </Grid>
            <Grid item xs={12} sm={6} lg={3} mt={5}>
            <Card id='woman' style={{ padding:'12px',
                borderColor: cardActive === 'woman' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5}  height='350' />
              </Card>
              <h6 style={{paddingTop:'5px'}}>Floral print</h6>
           
            </Grid>
            <Grid item xs={12} sm={6} lg={3} mt={5}>
            <Card id='boy' style={{ padding:'12px',
                borderColor: cardActive === 'boy' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6} height='350' />
                
              </Card>
                <h6 style={{paddingTop:'5px'}}>Geometric print</h6>
          
            </Grid>
            <Grid item xs={12} sm={6} lg={3} mt={5}>
            <Card id='girl' style={{ padding:'12px',
                borderColor: cardActive === 'girl' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image7} height='350' />
              </Card>
                <h6 style={{paddingTop:'5px'}}>Big prints</h6>
             
            </Grid>
          </Grid>
          <br />
          <Button className={classes.card_btn} component={Link} to="/colors"
            variant="contained"
            color="success"
            size="large"
            style={{ width: "31%" }}
          >
            Next
          </Button>
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default StylistScreen;
