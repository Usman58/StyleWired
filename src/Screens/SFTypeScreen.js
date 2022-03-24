import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/image 4 (5).png";
import image5 from "../images/image 4 (6).png";
import image6 from "../images/image 4 (7).png";
import image7 from "../images/image 4 (8).png";
import image8 from "../images/image 4 (9).png";
import image9 from "../images/Layer 1.png";
import { Card} from "react-bootstrap";
import $ from 'jquery'
import { HomeStyle } from "../Style/HomeStyle";
import {Link} from "react-router-dom";

function SFTypeScreen() {
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
          <h4 style={{ color: "#194B2D" }}>What’s Your Preferred Shoe Style? </h4>
          <p style={{ color: "#848484" }}>We know it’s hard to pick, but if you had to, which one?</p>
          
          <Grid container textAlign="center" spacing={4} mt={4}>
            <Grid item xs={12}  md={4} lg={2} >
              <Card id='Flat Shoes' style={{ wordWrap: 'normal',
                borderColor: cardActive === 'Flat Shoes' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image4} />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Flat Shoes</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2}>
            <Card id='Heeled Shoes' style={{ wordWrap: 'normal',padding:'2px',
                borderColor: cardActive === 'Heeled Shoes' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5} height='70' />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Heeled Shoes</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2}>
            <Card id='Sandals' style={{wordWrap: 'normal',padding:'10px',
                borderColor: cardActive === 'Sandals' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6} height='50'/>
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Sandals</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2}>
            <Card id='Sneaker' style={{ wordWrap: 'normal',
                borderColor: cardActive === 'Sneaker' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image7} />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Sneaker</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2}>
            <Card id='Boots' style={{  wordWrap: 'normal',
                borderColor: cardActive === 'Boots' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image8} />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Boots</p>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2}>
            <Card id='HB' style={{  wordWrap: 'normal',
                borderColor: cardActive === 'HB' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image9} />
                <Card.Body>
                  <p style={{fontSize:'17px'}}>Heeled boots</p>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <br />
         
          <Button className={classes.card_btn} component={Link} to="/hangingfreetime"
            variant="contained"
            size="large"
            color="success"
            style={{ width: "31%"}}
          >
            Next
          </Button>
         
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default SFTypeScreen;
