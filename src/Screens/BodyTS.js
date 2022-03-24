import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image1 from "../images/d1.png";
import image2 from "../images/d2.png";
import image3 from "../images/d3.png";
import image4 from "../images/d4.png";
import image5 from "../images/d5.png";
import image6 from "../images/d6.png";
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";
import { Card} from "react-bootstrap";
import $ from 'jquery'


function BodyTS() {
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
          <h4 style={{ color: "#194B2D" }}>What Feminine Shape Are You? 
</h4>
          <p style={{ color: "#848484" }}>Do go ahead and let us know your body type.</p>
       
          
          <Grid container textAlign="center" spacing={4} px={5}>
            <Grid item xs={12} sm={6}   md={3} lg={2} mt={5}>
              <Card id='Diamond' style={{ 
                borderColor: cardActive === 'Diamond' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image1} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'16px'}}>Diamond</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}   md={3} mt={5}>
            <Card id='Inverted Triangle' style={{   borderColor: cardActive === 'Inverted Triangle' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image2}  height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'14px'}}>Inverted Triangle</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}   md={3} mt={5}>
            <Card id='Rectangle' style={{ 
                borderColor: cardActive === 'Rectangle' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image3} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'16px'}}>Rectangle</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}  md={3} mt={5}>
            <Card id='Oval' style={{ 
                borderColor: cardActive === 'Oval' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image4} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'16px'}}>Oval</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}  md={3} mt={5}>
            <Card id='Triangle' style={{ 
                borderColor: cardActive === 'Triangle' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'16px'}}>Triangle</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}   md={3} mt={5}>
            <Card id='Hourglass' style={{ 
                borderColor: cardActive === 'Hourglass' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'16px'}}>Hourglass</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Button  className={classes.card_btn} component={Link} to="/topstyle"
            variant="contained"
            color="success"
            size="large"
            style={{ width: "40%" }}
          >
             Next
          </Button>
        </Grid>
      </Grid><br />
      <br />
    </>
  );
}

export default BodyTS;
