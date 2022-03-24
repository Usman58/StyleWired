import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/Boat shoes loafers.png";
import image5 from "../images/LTLS.png";
import image6 from "../images/Dress shoes.png";
import image7 from "../images/Hi-Top Sneakers.png";
import image8 from "../images/ChelseaBoots.png";
import image9 from "../images/Boots.png";
import { Card} from "react-bootstrap";
import $ from 'jquery'
import { HomeStyle } from "../Style/HomeStyle";
import {Link} from "react-router-dom";

function ComfortableShoesScreen() {
    const classes=HomeStyle();
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
          <h4 style={{ color: "#194B2D" }}>Which Type Of Shoes Are Your Usual Preference?</h4>
          <p style={{ color: "#848484" }}>For comfort, fashion, or any time of the day.</p>
          
          <Grid container textAlign="center"  spacing={2} mt={4}>
            <Grid item xs={6} md={4} lg={2} >
              <Card id='Flat Shoes' style={{ padding:'4px',wordWrap: 'normal',
                borderColor: cardActive === 'Flat Shoes' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image4} height='102' />
                <Card.Body>
                  <p style={{fontSize:'15px'}}>Boat shoes/Loafers</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2} >
            <Card id='Heeled Shoes' style={{ padding:'4px',wordWrap: 'normal',
                borderColor: cardActive === 'Heeled Shoes' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5} height='73' />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Low-Top/Leather Sneaker</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
            <Card id='Sandals' style={{padding:'4px', wordWrap: 'normal',
                borderColor: cardActive === 'Sandals' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6} height='100' />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Dress shoes
</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
            <Card id='Sneaker' style={{padding:'4px',   wordWrap: 'normal',
                borderColor: cardActive === 'Sneaker' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image7} height='100' />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Hi-Top Sneakers</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
            <Card id='Boots' style={{padding:'4px',  wordWrap: 'normal',
                borderColor: cardActive === 'Boots' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image8} height='100' />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Chelsea Boots</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
            <Card id='HS' style={{padding:'4px',   wordWrap: 'normal',
                borderColor: cardActive === 'HS' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image9} height='100' />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Boots</p>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <br />
         
          <Button className={classes.card_btn} component={Link} to="/Anyno-nosforclothes"
            variant="contained"
            size="large"
            color="success"
            style={{ width: "40%"}}
          >
            Next
          </Button>
         
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default ComfortableShoesScreen;
