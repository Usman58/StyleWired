import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image1 from "../images/Large Prints.png";
import image2 from "../images/Shorts.png";
import image3 from "../images/Coloured trousers.png";
import image4 from "../images/Shirts.png";
import image5 from "../images/Polo shirts.png";
import image6 from "../images/Plaid Shirts.png";
import {Link} from "react-router-dom";
import { Card} from "react-bootstrap";
import $ from 'jquery'
import { HomeStyle } from '../Style/HomeStyle';

function AnythingWear() {
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
          <h4 style={{ color: "#194B2D" }}>Any No-Nos For Clothes?</h4>
          <p style={{ color: "#848484" }}>Because everyone has their preferences, do let us know.</p>
       
          
          <Grid container textAlign="center" spacing={4}>
            <Grid item xs={12} sm={6}   md={4} lg={2} mt={5}>
              <Card id='Large Prints' style={{  padding:'8px',
                borderColor: cardActive === 'Large Prints' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image1} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'15px'}}>Large Prints</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}   md={4} mt={5}>
            <Card id='Shorts' style={{ padding:'8px',
                borderColor: cardActive === 'Shorts' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image2}  height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'15px'}}>Shorts</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}   md={4} mt={5}>
            <Card id='Coloured trousers' style={{padding:'8px',
                borderColor: cardActive === 'Coloured trousers' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image3} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'13px'}}>Coloured Trousers</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}  md={4} mt={5}>
            <Card id='Shirts' style={{ padding:'8px',
                borderColor: cardActive === 'Shirts' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image4} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'15px'}}>Shirts</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}  md={4} mt={5}>
            <Card id='Polo shirts' style={{ padding:'8px',
                borderColor: cardActive === 'Polo shirts' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'15px'}}>Polo shirts</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}   md={4} mt={5}>
            <Card id='Plaid Shirts' style={{padding:'8px',
                borderColor: cardActive === 'Plaid Shirts' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6} height='350' />
                <Card.Body>
                  <Card.Title style={{fontSize:'15px'}}>Plaid Shirts</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
          </Grid> 
          <br />
          <Button className={classes.card_btn}
            variant="contained" component={Link} to="/colors"
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

export default AnythingWear;
